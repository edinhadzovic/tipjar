import React, { useState } from 'react';
import { Button, Connector, EthInput, LiveEvents } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FAQ } from './components/faq';
import { useConntectorContext } from './context/connectorContext';
import { ethers } from 'ethers';
import { getContractAddress } from './constants/misc';
import { Network } from './components/network';

interface IFormProps {}

const Form: React.FC<IFormProps> = () => {
  const {connected, account, fetchContractBalance} = useConntectorContext();
  const [eth, setEth] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value < 0 ? "0" : e.currentTarget.value
    setEth(value);
  }

  const onTip = () => {
    if (!window.provider) return;
    const signer = window.provider.getSigner(account);

    signer.sendTransaction({
      to: getContractAddress(),
      value: ethers.utils.parseEther(eth)
    }).then(() => fetchContractBalance());
  }

  const onTake = async () => {
    if (!window.contract) return;
    if (!window.provider) return;
    setError(false);
    const { contract, isProduction } = window.contract;

    const max = isProduction ? await contract.getMaxBorrowAmount() : await contract.getTakeValue();

    if (+eth > +ethers.utils.formatEther(max)) {
      setError(true);
      return;
    }

    const signer = window.provider.getSigner(account);
    const signerContract = contract.connect(signer);
    await signerContract.takeOut(ethers.utils.parseEther(eth))
    fetchContractBalance();
  }

  return (
    <div className='space-y-8 text-center'>
      <div>
        <EthInput hasError={error} value={eth} onChange={onChange} />
      </div>
      <div className='flex space-x-4 items-center justify-center'>
        <Button 
          disabled={!connected} 
          icon={<FontAwesomeIcon icon={faPlus} />} 
          onClick={onTip}>Tip</Button>
        <div>or</div>
        <Button 
          disabled={!connected} 
          icon={<FontAwesomeIcon icon={faMinus} />} 
          art="danger" 
          onClick={onTake}>Borrow</Button>
      </div>
    </div>
  );
}


function App() {
  const {balance} = useConntectorContext();
  const [modal, setModal] = useState(false);

  return (
    <div className='font-offside bg-cultured relative'>
      <div className={`absolute overflow-y-auto top-0 left-0 sm:top-[15%] sm:left-[15%] 2xl:left-[25%] bg-gray-800 text-white w-full h-full sm:w-3/4 sm:h-3/4 2xl:w-2/4 2xl:h-3/4 shadow-2xl border-4 border-white ${modal ? "" : "hidden"}`}>
        <FAQ onClose={() => setModal(false)} />
      </div>
      <div className='container mx-auto min-h-screen justify-between flex flex-col'>
        <header className='flex py-4 px-4 justify-between'>
          <div className='pt-2 flex items-center space-x-2'>
            <a href='https://www.planbdao.com/'>
              <img className='w-10 h-10' src='./img/PlanBLogo.png' alt='PlanB DAO logo'/>
            </a>
            <h1 className='text-sm sm:text-xl'>tipJAR</h1>
          </div>
          <div className='flex justify-center items-end space-x-4'>
              <div>
                <Connector />
              </div>
              <div>
                <Button rounded onClick={() => setModal(true)}><FontAwesomeIcon icon={faQuestion} /></Button>
              </div>
          </div>
        </header>
        <main className='w-full xl:w-3/4 mx-auto space-y-8'>
          <div className='text-center'>
            <Network />
          </div>
          <div className='text-center'>
            <div className='text-[96px] hidden'>
              321000 USD
            </div>
            <div className='text-[60px]'>
              {balance} eth
            </div>
          </div>
          <Form />
          <LiveEvents />
        </main>
        <footer className='p-10 text-center'>
          *everyone can tip or take from this tipJAR. <br/> <a className='text-green-400 font-bold' rel="noreferrer" href="https://en.wikipedia.org/wiki/With_great_power_comes_great_responsibility" target="_blank">With great power comes great responsibility.</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
