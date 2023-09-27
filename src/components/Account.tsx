import * as React from 'react';
import {SectionContainer} from "./SectionContainer";

export interface AccountProps {
    publicKey: string,
    provider: string,
}
function Account({ publicKey, provider }: AccountProps) {
    return (
        <SectionContainer>
            <h3>🆔 Account</h3>
            <table>
                <tbody>
                    <tr><td>Public key</td><td>{publicKey}</td></tr>
                    <tr><td>Provider</td><td><span className={'monotype'}>{provider}</span></td></tr>
                </tbody>
            </table>
        </SectionContainer>
    );
}

export default Account;
