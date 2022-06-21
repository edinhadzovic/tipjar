import { ethers } from "ethers";
import { getContractAbi, getContractAddress } from "../constants/misc";

interface ITipJarContractABI extends ethers.Contract {
    takeOut: (amount: number) => Promise<void>
    getMaxBorrowAmount: () => Promise<string>
    getTakeValue: () => Promise<string>
    balance: () => Promise<string>
}

export class TipJarContract {
    public contract: ITipJarContractABI;
    public isProduction: boolean;
    
    constructor(provider: ethers.providers.Web3Provider) {
        this.contract = new ethers.Contract(getContractAddress(), getContractAbi(), provider) as ITipJarContractABI;
        this.isProduction = process.env.NODE_ENV === "production";
    }
}