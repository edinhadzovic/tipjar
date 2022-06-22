import { useNetworkContext } from "../context/networkContext";

export enum NETWORK {
    UNKNOWN = 0,
    ETHEREUM = 1,
    ROPSTEN = 3
}

const NETWORK_NAME = {
    [NETWORK.UNKNOWN]: "Unknown",
    [NETWORK.ETHEREUM]: "Mainnet",
    [NETWORK.ROPSTEN]: "Ropsten",
}

const NETWORK_CIRCLE = {
    [NETWORK.UNKNOWN]: "w-2 h-2 bg-dark-jungle-light rounded-full",
    [NETWORK.ETHEREUM]: "w-2 h-2 bg-green-500 rounded-full",
    [NETWORK.ROPSTEN]: "w-2 h-2 bg-pink-500 rounded-full",
}


interface INetworkProps {}

export const Network: React.FC<INetworkProps> = () => {
    const { network } = useNetworkContext();

    return (
        <div className="px-4 py-2 inline-flex items-center space-x-2 rounded text-xs">
            <div className={NETWORK_CIRCLE[network]}></div><div>{NETWORK_NAME[network]}</div>
        </div>
    );
}