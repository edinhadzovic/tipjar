type ButtonType = "normal" | "danger";

interface IButtonProps {
    children: React.ReactNode
    onClick: () => void;
    icon?: any;
    type?: ButtonType
    rounded?: boolean
}

export const Button: React.FC<IButtonProps> = 
    ({
        children,
        onClick,
        icon,
        type = "normal",
        rounded = false
    }) => {

    const getClass = (type: ButtonType, rounded: boolean) => {
        let className = "";
        switch(type) {
            case "danger":
                className += "bg-red-600";
                break;
            default:
                className += "bg-gray-800";
        }

        if (rounded) {
            className += " rounded-full";
        } else {
            className += " w-[120px] rounded"
        }

        return className;
    }

    return (
        <button className={`flex flex-row justify-center items-center text-gray-200 space-x-4 shadow-sm min-w-[40px] min-h-[40px] ${getClass(type, rounded)}`} onClick={onClick}>
            {icon && <div>{icon}</div> }
            <div>{children}</div>
        </button>
    );
}