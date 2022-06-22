export enum ERROR_TYPE {
    NO_ERROR = 0,
    WRONG_NETWORK = 401,
    TOO_GREEDY,
    UNKNOWN_ERROR = 500
}

export const ErrorMsg = {
    [ERROR_TYPE.NO_ERROR]: "",
    [ERROR_TYPE.WRONG_NETWORK]: "You are on the wrong network, please change to mainnet!",
    [ERROR_TYPE.TOO_GREEDY]: `You borrow amount is to high, try to lower it!`,
    [ERROR_TYPE.UNKNOWN_ERROR]: `A unknown error happen, please try again later.`,
}