export const formatAddress = (address: string) => 
    `${address.slice(0, 6).toString()}...${address.slice(address.length - 4, address.length)}`