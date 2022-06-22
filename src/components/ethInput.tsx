import { ErrorMsg, ERROR_TYPE } from "../constants/errors"

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
}

export const EthInput: React.FC<IInputProps> = ({
    onChange,
    value,
    hasError = false
}) => {

    return (
        <>
            <div className={`p-2 space-x-4 bg-cultured-dark rounded-sm inline-flex shadow ${hasError && "animate-wiggle" }`}>
                <div>
                    <input min="0" type="number" className="bg-cultured-dark outline-none" onChange={onChange} value={value} placeholder={"0"}/>
                </div>
                <div>
                    eth
                </div>
            </div>
            {hasError && <div className="mt-3 text-rosso">{ErrorMsg[ERROR_TYPE.TOO_GREEDY]}</div>}
        </>
        
    )
}