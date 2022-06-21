import { ethers } from "ethers";
import { TIP_JAR_CONTRACT_ABI_MAIN_NET, TIP_JAR_CONTRACT_ADDRESS_MAIN_NET } from "../constants/misc";

interface ITipJarContractABI extends ethers.Contract {
    takeOut: (amount: number) => Promise<void>
    getMaxBorrowAmount: () => Promise<string>
    balance: () => Promise<string>
}

export class TipJarContract {
    public contract: ITipJarContractABI;
    
    constructor(provider: ethers.providers.Web3Provider) {
        this.contract = new ethers.Contract(TIP_JAR_CONTRACT_ADDRESS_MAIN_NET, TIP_JAR_CONTRACT_ABI_MAIN_NET, provider) as ITipJarContractABI;
    }
}