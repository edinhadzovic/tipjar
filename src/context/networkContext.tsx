import { createContext, useContext, useEffect, useState } from "react";
import { NETWORK } from "../components/network";
import { setNetworkId } from "../utils/helpers";

interface INetworkContextProps {
    children: React.ReactNode;
}

interface INetworkContextState {
    network: NETWORK
}

const NetworkContext = createContext({} as INetworkContextState);

export const NetworkContextProvider: React.FC<INetworkContextProps> = 
    ({children}) => {
        const [network, setNetwork] = useState<NETWORK>(NETWORK.UNKNOWN);

        useEffect(() => {
            if (!window.provider) return;

            window.provider.getNetwork()
                .then((network) => {
                    setNetwork(setNetworkId(network.chainId));
                    
                })
                .catch(error => console.error(error));
            
            if (!window.ethereum) return;
            
            window.ethereum.on("chainChanged", (chainId: any) => {
                setNetwork(setNetworkId(Number(chainId)));
                window.location.reload();
            }); 
        })

        return (
            <NetworkContext.Provider value={{network}}>
                {children}
            </NetworkContext.Provider>
        );
    }

export const useNetworkContext = () => useContext(NetworkContext);