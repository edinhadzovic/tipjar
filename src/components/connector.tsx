import { useConntectorContext } from "../context/connectorContext";
import { formatAddress } from "../utils/helpers";
import { Button } from "./button";

interface IConnectorProps {}

export const Connector: React.FC<IConnectorProps> = (props) => {
    const {connectWithWallet, account, connected} = useConntectorContext();

    return (
        <Button disabled={!window.provider} onClick={connectWithWallet}>
            {!window.provider ? "Install Metamask" : (account && connected) ? formatAddress(account) : "Connect Metamask"}
        </Button>
    );
}