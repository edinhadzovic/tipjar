import { useContractEventContext } from "../context/contractEventContext";

interface ILiveEventsProps {}

export const LiveEvents: React.FC<ILiveEventsProps> = () => {
    const { events } = useContractEventContext();
    return (
        <div className="space-y-4">
            <div className="flex">
                live <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
            </div>
            {events.map((event) => (
                <div
                    className={`flex text-cultured-light px-5 py-3 shadow items-center justify-evenly ${event.type === "tipped" ? "bg-green-500" : "bg-rosso"}`} 
                    key={event.hash}
                >
                    <div>
                        {event.type === "tipped" ? "Tipped" : "Borrowed" }
                    </div>
                    <div>
                        <div className="text-sm font-bold">address</div>
                        <div>{event.address}</div>
                    </div>
                    <div>
                        <div className="text-sm font-bold">amount</div>
                        <div>{event.amount} eth</div>
                    </div>
                </div>
            ))}
        </div>
    );
}