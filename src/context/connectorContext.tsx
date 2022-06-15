import { ethers } from "ethers";
import { createContext, useContext, useState } from "react";
import { TipJarContract } from "../service/TipJarContract";
import { METHODS } from "../utils/ethereum";

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
    connectWithWallet: () => Promise<void>;
}

const ConnectorContext = createContext({} as IConnectorContextState);

export const ConnectorContextProvider: React.FC<IConnectorContextProps> = ({children}) => {
    const [connected, setConnected] = useState<boolean>(false);
    const [account, setAccount] = useState<string>("");
    window.provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum) : null
    window.contract = window.provider ? new TipJarContract(window.provider): null;

    const connectWithWallet = async () => {
        if (!window.provider) return;

        const accounts: string[] = await window.provider.send(METHODS.REQUEST_ACCOUNTS, [])
        setAccount(accounts[0]);
        setConnected(true);
    }

    return (
        <ConnectorContext.Provider value={{connected, account, connectWithWallet}}>
            {children}
        </ConnectorContext.Provider>
    );
}

export const useConntectorContext = () => useContext(ConnectorContext);