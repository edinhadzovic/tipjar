import { ethers } from "ethers";
import { TIP_JAR_CONTRACT_ABI, TIP_JAR_CONTRACT_ADDRESS } from "../constants/misc";

interface ITipJarContractABI extends ethers.Contract {
    takeOut: (amount: number) => Promise<void>
    getTakeValue: () => Promise<string>
    balance: () => Promise<string>
}

export class TipJarContract {
    public contract: ITipJarContractABI;
    
    constructor(provider: ethers.providers.Web3Provider) {
        this.contract = new ethers.Contract(TIP_JAR_CONTRACT_ADDRESS, TIP_JAR_CONTRACT_ABI, provider) as ITipJarContractABI;
    }
}