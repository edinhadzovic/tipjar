import { useConntectorContext } from "../context/connectorContext";
import { formatAddress } from "../utils/helpers";
import { Button } from "./button";

interface IConnectorProps {}

export const Connector: React.FC<IConnectorProps> = (props) => {
    const {connectWithWallet, account, connected} = useConntectorContext();

    return (
        <Button disabled={!window.provider} onClick={connectWithWallet}>
            <div className="text-xs sm:text-base">{!window.provider ? "Install Metamask" : (account && connected) ? formatAddress(account) : "Connect Metamask"}</div>
        </Button>
    );
}