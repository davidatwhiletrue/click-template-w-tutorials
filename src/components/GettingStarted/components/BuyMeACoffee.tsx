import * as React from "react";
import styled from 'styled-components';
import { SectionContainer } from './SectionContainer';
import { useClickRef } from "@make-software/csprclick-react";
import { SendResult } from "@make-software/csprclick-web-sdk";
import makeTransferDeploy from "./transfer-deploy";
import Prism from "prismjs";

function BuyMeACoffee() {
	const [deployHash, setDeployHash] = React.useState<string | undefined>(undefined);
	const recipientPk = '0203596b49460de7900614b5e25a1fa1861b3eb944c42bea18fc7506b220fd4d9d61';

	const clickRef = useClickRef();
	const activeAccount = clickRef?.getActiveAccount();

	React.useEffect(() => {
		Prism.highlightAll();
	}, []);

	const handleSignTransaction = async () => {
		const sender = activeAccount?.public_key?.toLowerCase() || '';
		const deploy = makeTransferDeploy(sender, recipientPk, '50' + '000000000', 'casper-test');
		clickRef?.send(deploy, sender)
			.then((res: SendResult | undefined) => {
				if (res?.deployHash) {
					setDeployHash(res.deployHash);
					alert('Transaction sent successfully: ' + res.deployHash);
				} else if (res?.cancelled) {
					alert('Sign cancelled');
 				} else {
					alert('Error in send(): ' + res?.error + '\n' + res?.errorData);
				}
			})
			.catch((err: any) => {
				alert('Error: ' + err);
				throw err;
			});
	};

	return (
		<>
			<SectionContainer background={'unset'}>
				<span>
					Your app will need to send transactions to Casper. Let&apos;s illustrate how to do it buying a coffee
					for Alice with testnet CSPR tokens.
				</span>
				<span>
					First, build a transfer transaction deploy. The <code>casper-js-sdk</code> is available in this template to do
					so. Refer to the official <a href={'https://casper-ecosystem.github.io/casper-js-sdk/'}>SDK
					documentation</a> for more information and examples of usage.
				</span>
				<span>
					Next, call <code>clickRef.send()</code> method. CSPR.click will request the user to sign the transaction in the
					active wallet and then will send the transaction to a Casper node for processing it.
				</span>
				<span>
					Notice in the example that your application must handle different possible responses. Your
					app may show a success message with the deploy hash when the transaction has been sent, but react
					appropriately when the user rejects or the node reject the transaction.
				</span>
			</SectionContainer>
			<SectionContainer>
				<pre>
					<code className={'language-javascript'}>
						{`const handleSignTransaction = async () => {
  const sender = activeAccount?.public_key?.toLowerCase();
  const deploy = makeTransferDeploy(sender, recipientPk, '50000000000', 'casper-test');
  clickRef?.send(deploy, sender)
    .then(res => {
	  if (res?.deployHash) {
	  	alert('Transaction sent successfully: ' + res.deployHash);
	  } else if (res?.cancelled) {
	  	alert('Sign cancelled');
	  } else {
	  	alert('Error in send(): ' + res?.error + ' - ' + res?.errorData);
	  }    
	})
}
`}
					</code>
				</pre>
			</SectionContainer>
			<SectionContainer>
				<table>
					<tbody>
						<tr>
							<td>Send</td>
							<td>50 CSPR</td>
						</tr>
						<tr>
							<td>From</td>
							<td>
								<i>your account</i>
							</td>
						</tr>
						<tr>
							<td>To</td>
							<td>
								<span className={'monotype'}>{recipientPk}</span>
							</td>
						</tr>
					</tbody>
				</table>
				{ activeAccount?.public_key && <button onClick={() => handleSignTransaction()}>
					Sign transaction
				</button> }
				{deployHash && (
					<a
							href={`${clickRef?.appSettings?.csprlive_url}deploy/${deployHash}`}
							target='_blank'
							rel='noreferrer'
						>
							Check transfer status on CSPR.live
					</a>
				)}
			</SectionContainer>
		</>
	);
}

export default BuyMeACoffee;
