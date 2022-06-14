interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const EthInput: React.FC<IInputProps> = ({
    onChange,
    value
}) => {

    return (
        <div className="p-2 space-x-4 bg-[#EFEFEF] rounded-sm inline-flex shadow">
            <div>
                <input min="0" type="number" className="bg-transparent outline-none" onChange={onChange} value={value} placeholder={"0"}/>
            </div>
            <div>
                eth
            </div>
        </div>
    )
}