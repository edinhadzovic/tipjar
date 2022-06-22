import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";
import { ERROR_TYPE } from "../constants/errors";
import { TipJarContract } from "../service/TipJarContract";
import { METHODS } from "../utils/ethereum";
import { decodeError } from "../utils/helpers";

declare global {
    interface Window {
      ethereum: any
      provider: ethers.providers.Web3Provider | null
      contract: TipJarContract | null; // todo import own contract
    }
  }

interface IConnectorContextProps {
    children: React.ReactNode
}

interface IConnectorContextState {
    connected: boolean,
    account: string,
    balance: string,
    appError: ERROR_TYPE,
    connectWithWallet: () => Promise<void>;
    fetchContractBalance: () => void;
}

const ConnectorContext = createContext({} as IConnectorContextState);

export const ConnectorContextProvider: React.FC<IConnectorContextProps> = ({children}) => {
    const [connected, setConnected] = useState<boolean>(false);
    const [account, setAccount] = useState<string>("");
    const [balance, setBalance] = useState<string>("0");
    const [appError, setAppError] = useState<ERROR_TYPE>(ERROR_TYPE.NO_ERROR);
    window.provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum) : null
    window.contract = window.provider ? new TipJarContract(window.provider): null;

    const connectWithWallet = async () => {
        if (!window.provider) return;

        const accounts: string[] = await window.provider.send(METHODS.REQUEST_ACCOUNTS, [])
        setAccount(accounts[0]);
        setConnected(true);
    }

    const fetchContractBalance = () => {
        if (!window.contract) return;
        const { contract } = window.contract;
        contract.balance()
            .then((amount) => setBalance(ethers.utils.formatEther(amount)))
            .catch(error => setAppError(decodeError(error.code)));
    }

    useEffect(() => {
        fetchContractBalance();
      }, [])

    return (
        <ConnectorContext.Provider value={{connected, account, balance, appError, fetchContractBalance, connectWithWallet}}>
            {children}
        </ConnectorContext.Provider>
    );
}

export const useConntectorContext = () => useContext(ConnectorContext);