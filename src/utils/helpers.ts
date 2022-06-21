import { NETWORK } from "../components/network";
import { IEvent } from "../context/contractEventContext"

export const formatAddress = (address: string) => 
    `${address.slice(0, 6).toString()}...${address.slice(address.length - 4, address.length)}`

export const formatBigNumbersToEth = (bigNumber: string, ethers: any) =>
    ethers.utils.formatEther(ethers.BigNumber.from(bigNumber))

export const hashExist = (events: IEvent[], hash: string) => 
    events.find((event) => event.hash === hash);

export const setNetworkId = (id: number) => {
    switch(id) {
        case NETWORK.ETHEREUM:
            return NETWORK.ETHEREUM;
        case NETWORK.ROPSTEN:
            return NETWORK.ROPSTEN;
        default:
            return NETWORK.UNKNOWN;
    }
}