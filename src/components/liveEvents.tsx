import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContractEventContext } from "../context/contractEventContext";
import { formatAddress } from "../utils/helpers";

interface ILiveEventsProps {}

export const LiveEvents: React.FC<ILiveEventsProps> = () => {
    const { events } = useContractEventContext();
    return (
        <div className="space-y-4 mx-6">
            <div className="flex">
                live <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
            </div>
            {events.map((event) => (
                <div
                    className={`flex flex-col space-y-3 sm:space-x-3 sm:flex-row text-dark-jungle px-5 bg-cultured-dark shadow py-2 items-start sm:items-center rounded-lg`} 
                    key={event.hash}
                >
                    <div className="flex-1 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 text-sm">
                        <div className={`${event.type === "tipped" ? "bg-green-500" : "bg-rosso-light"} inline-block px-3 py-2 text-white font-black shadow rounded`}>
                            {event.type === "tipped" ? "Tipped" : "Borrowed" }
                        </div>
                        <div className="">
                            <div className="text-sm font-bold">address</div>
                            <div>{formatAddress(event.address)}</div>
                        </div>
                        <div className="">
                            <div className="text-sm font-bold">etherscan</div>
                            <div>
                                <a className="text-blue-600 hover:text-blue-500" href={`https://ropsten.etherscan.io/tx/${event.hash}`} target="_blank" rel="noreferrer">
                                    {formatAddress(event.hash)} <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col sm:items-end">
                        <div className="text-sm font-bold">amount</div>
                        <div>{event.amount} eth</div>
                    </div>
                </div>
            ))}
        </div>
    );
}