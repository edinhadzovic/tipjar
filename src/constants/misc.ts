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