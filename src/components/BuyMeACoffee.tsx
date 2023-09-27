import styled from 'styled-components';
import { CasperClient, CLPublicKey, DeployUtil } from 'casper-js-sdk';
import { Deploy } from 'casper-js-sdk/dist/lib/DeployUtil';
import { SectionContainer } from './SectionContainer';
import { useState } from 'react';

const StyledCSPRLiveLink = styled.div(({ theme }) => ({
	marginTop: '12px',
	a: {
		textDecoration: 'none',
		color: theme.styleguideColors.contentPrimary,
	},
}));

const SignButton = styled.button(() => ({
	marginTop: '24px',
	fontSize: '14px',
	width: '176px',
	height: '24px',
}));

function BuyMeACoffee(props: any) {
	const [deployHash, setDeployHash] = useState<string | undefined>(undefined);
	const recipientPk = '0203596b49460de7900614b5e25a1fa1861b3eb944c42bea18fc7506b220fd4d9d61';

	const makeNativeTransferDeploy = (
		senderPublicKeyHex: string,
		recipientPublicKeyHex: string,
		amountMotes: string,
		transferIdMemo: string,
		chainName: string
	) => {
		const senderPublicKey = CLPublicKey.fromHex(senderPublicKeyHex);
		const recipientPublicKey = CLPublicKey.fromHex(recipientPublicKeyHex);

		const deployParams = new DeployUtil.DeployParams(senderPublicKey, chainName);

		const session = DeployUtil.ExecutableDeployItem.newTransfer(
			amountMotes,
			recipientPublicKey,
			undefined,
			transferIdMemo
		);

		const payment = DeployUtil.standardPayment('100000000');

		return DeployUtil.makeDeploy(deployParams, session, payment);
	};

	const csprTransferDeploy = (sender: string, recipient: string): Deploy => {
		return makeNativeTransferDeploy(sender, recipient, '50' + '000000000', '1', 'casper-test');
	};

	const handleBuyMeACoffee = async () => {
		const deploy = csprTransferDeploy(props.publicKey.toLowerCase(), recipientPk);
		await signAndSend(deploy);
	};

	const signAndSend = async (deploy: Deploy) => {
		const account = props.publicKey.toLowerCase();
		const deployJson = DeployUtil.deployToJson(deploy);
		window.csprclick
			.send(JSON.stringify(deployJson.deploy), account)
			.then((res: any) => {
				if (res.cancelled) {
					alert('Sign cancelled');
					return;
				}
				if (res.error) {
					alert('Error: ' + res.error + '\n' + res.errorData);
				} else {
					alert('Sign successful: ' + JSON.stringify(res.deployHash, null, 2));
				}
			})
			.catch((err: any) => {
				alert('Error: ' + err);
				throw err;
			});
	};

	return (
		<>
			<SectionContainer>
				<h3>☕ Buy me a coffee</h3>
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
				<SignButton color='primaryRed' onClick={handleBuyMeACoffee}>
					Sign transaction
				</SignButton>
				{deployHash && (
					<StyledCSPRLiveLink>
						<a
							href={`${window.csprclick.appSettings?.csprlive_url}deploy/${deployHash}`}
							target='_blank'
							rel='noreferrer'
						>
							Check latest deploy status on CSPR.live
						</a>
					</StyledCSPRLiveLink>
				)}
			</SectionContainer>
		</>
	);
}

export default BuyMeACoffee;
