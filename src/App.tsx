import React, { useState } from 'react';
import { Button, Connector, EthInput } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FAQ } from './components/faq';
import { useConntectorContext } from './context/connectorContext';

const Form = () => {
  const {connected} = useConntectorContext();

  return (
    <div className='space-y-8 text-center'>
      <div>
        <EthInput />
      </div>
      <div className='flex space-x-4 items-center justify-center'>
        <Button disabled={!connected} icon={<FontAwesomeIcon icon={faPlus} />} onClick={() => console.log("todo")}>Tip</Button>
        <div>or</div>
        <Button disabled={!connected} icon={<FontAwesomeIcon icon={faMinus} />} type="danger" onClick={() => console.log("todo")}>Take</Button>
      </div>
    </div>
  );
}


function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className='font-offside bg-cultured relative'>
      <div className={`absolute overflow-y-auto top-0 left-0 sm:top-[15%] sm:left-[15%] 2xl:left-[25%] bg-gray-800 text-white w-full h-full sm:w-3/4 sm:h-3/4 2xl:w-2/4 2xl:h-3/4 shadow-2xl border-4 border-white ${modal ? "" : "hidden"}`}>
        <FAQ onClose={() => setModal(false)} />
      </div>
      <div className='container mx-auto min-h-screen justify-between flex flex-col'>
        <header className='flex py-4 px-4 justify-between'>
          <div className='pt-2'><h1 className='text-xl'>tipJAR</h1></div>
          <div className='flex justify-center items-end space-x-4'>
              <div>
                <Connector />
              </div>
              <div>
                <Button rounded onClick={() => setModal(true)}><FontAwesomeIcon icon={faQuestion} /></Button>
              </div>
          </div>
        </header>
        <main className='w-full sm:w-1/2 mx-auto space-y-8'>
          <div className='text-center'>
            <div className='text-[96px]'>
              321000 USD
            </div>
            <div className='text-[60px]'>
              72.231 eth
            </div>
          </div>
          <Form />
        </main>
        <footer className='p-10 text-center'>
          *everyone can tip or take from this tipJAR. <br/> <a className='text-green-400 font-bold' rel="noreferrer" href="https://en.wikipedia.org/wiki/With_great_power_comes_great_responsibility" target="_blank">With great power comes great responsibility.</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
