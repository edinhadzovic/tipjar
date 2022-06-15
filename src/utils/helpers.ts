import { IEvent } from "../context/contractEventContext"

export const formatAddress = (address: string) => 
    `${address.slice(0, 6).toString()}...${address.slice(address.length - 4, address.length)}`

export const formatBigNumbersToEth = (bigNumber: string, ethers: any) =>
    ethers.utils.formatEther(ethers.BigNumber.from(bigNumber))

export const hashExist = (events: IEvent[], hash: string) => 
    events.find((event) => event.hash === hash);