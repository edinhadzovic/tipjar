type ButtonType = "normal" | "danger";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    onClick: () => void;
    icon?: any;
    art?: ButtonType
    rounded?: boolean
    disabled?: boolean
}

export const Button: React.FC<IButtonProps> = 
    ({
        children,
        onClick,
        icon,
        art = "normal",
        rounded = false,
        disabled = false,
    }) => {

    const getClass = (art: ButtonType, rounded: boolean) => {
        let className = "";
        switch(art) {
            case "danger":
                className += "bg-rosso hover:bg-rosso-light";
                break;
            default:
                className += "bg-dark-jungle hover:bg-dark-jungle-light";
        }

        if (rounded) {
            className += " rounded-full";
        } else {
            className += " px-5 rounded"
        }

        return className;
    }

    return (
        <button disabled={disabled} className={`flex flex-row justify-center disabled:bg-cultured-dark disabled:text-dark-jungle-light items-center text-cultured space-x-4 shadow-sm min-w-[40px] min-h-[40px] ${getClass(art, rounded)}`} onClick={onClick}>
            {icon && <div>{icon}</div> }
            <div>{children}</div>
        </button>
    );
}