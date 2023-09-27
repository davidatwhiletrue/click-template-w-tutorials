import {AccountMenuItem, CopyHashMenuItem, ViewAccountOnExplorerMenuItem} from "@make-software/csprclick-react";
import CSPRClickIcon from '../logo.svg';

const handleGotoClickDocs = () => {
    window.location.href = "https://cspr.click";
};

export const accountMenuItems = [
    <ViewAccountOnExplorerMenuItem key={0}/>,
    <CopyHashMenuItem key={1}/>,
    <AccountMenuItem
        key={2}
        onClick={handleGotoClickDocs}
        icon={CSPRClickIcon}
        label="CSPR.click docs"
    />
];