export const TIP_JAR_CONTRACT_ADDRESS = "0x0f60286b547413da87De196D61f9642bA06FA30F"

/**
 * todo: rename getTakeValue -> getMaxBorrowLimit
 */
export const TIP_JAR_CONTRACT_ABI = [
    "function takeOut(uint256 _amount) public payable",
    "function getTakeValue() public view returns (uint256)",
    "function balance() public view returns (uint256)",
    "event Taken(address, uint)",
    "event Tipped(address, uint)"
]

export const TIP_JAR_CONTRACT_EVENTS = {
    TAKEN: "Taken",
    TIPPED: "Tipped"
}

export const TIP_JAR_CONTRACT_ADDRESS_MAIN_NET = "0xaFa6cFAa492360e0b7F5bF1a5840D4BD9A89618D"

/**
 * todo: rename getTakeValue -> getMaxBorrowLimit
 */
export const TIP_JAR_CONTRACT_ABI_MAIN_NET = [
    "function takeOut(uint256 _amount) public payable",
    "function getMaxBorrowAmount() public view returns (uint256)",
    "function balance() public view returns (uint256)",
    "event Taken(address, uint)",
    "event Tipped(address, uint)"
]

export const TIP_JAR_CONTRACT_EVENTS_MAIN_NET = {
    TAKEN: "Taken",
    TIPPED: "Tipped"
}

export const getContractAddress = () => process.env.NODE_ENV === "production" ? TIP_JAR_CONTRACT_ADDRESS_MAIN_NET : TIP_JAR_CONTRACT_ADDRESS;
export const getContractAbi = () => process.env.NODE_ENV === "production" ? TIP_JAR_CONTRACT_ABI_MAIN_NET : TIP_JAR_CONTRACT_ABI;


// [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Taken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Tipped","type":"event"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBorrowAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"takeOut","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]