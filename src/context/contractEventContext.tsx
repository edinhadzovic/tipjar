import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";
import { TIP_JAR_CONTRACT_EVENTS } from "../constants/misc";
import { formatBigNumbersToEth, hashExist } from "../utils/helpers";

type EventType = "taken" | "tipped";

export interface IEvent {
    hash: string
    type: EventType
    address: string;
    amount: string;
}

interface IContractEventContextProps {
    children: React.ReactNode;
}

interface IContractEventContextState {
    events: IEvent[]
}

const ContractEventContext = createContext({} as IContractEventContextState);

export const ContractEventContextProvider: React.FC<IContractEventContextProps> = 
    ({children}) => {
        const [events, setEvents] = useState<IEvent[]>([]);

        const poplast = (arr: IEvent[]) => {
            if (arr.length === 5) {
                arr.pop()
                return arr;
            }

            return arr;
        } 

        useEffect(() => {
            if (!window.contract) return;
            const { contract } = window.contract;

            contract.on(TIP_JAR_CONTRACT_EVENTS.TAKEN, (address: string, amount: string, event: any) => {
                const stored = hashExist(events, event.transactionHash);
                if (!stored) {
                    const newEvent: IEvent = {
                        hash: event.transactionHash,
                        type: "taken",
                        address,
                        amount: formatBigNumbersToEth(amount, ethers)
                    }
    
                    setEvents(() => [newEvent, ...poplast(events)]);
                }
                
            })

            contract.on(TIP_JAR_CONTRACT_EVENTS.TIPPED, (address: string, amount: string, event: any) => {
                // check if hash exist, because the events fires sometimes twice
                const stored = hashExist(events, event.transactionHash);

                if (!stored) {
                    const newEvent: IEvent = {
                        hash: event.transactionHash,
                        type: "tipped",
                        address,
                        amount: formatBigNumbersToEth(amount, ethers)
                    }
    
                    setEvents(() => [newEvent, ...poplast(events)]);
                }
            })
        })

        return (
            <ContractEventContext.Provider value={{events}}>
                {children}
            </ContractEventContext.Provider>
        );
    }

export const useContractEventContext = () => useContext(ContractEventContext);