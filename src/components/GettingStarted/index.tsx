import React from 'react';
import { useClickRef } from '@make-software/csprclick-react';
import { Account, BuyMeACoffee, CustomMenuItems, Section, UseClickRefHook } from './components';
import Container from '../container';

const LandingBrief = () => {
	return (
		<Container>
			<h2>✨ Multiple wallets integration</h2>
			<Section>
				<span>This project template comes with full support for multiple wallets:</span>
				<ul>
					<li>Casper Wallet</li>
					<li>Ledger</li>
					<li>CasperDash</li>
					<li>Torus</li>
					<li>Metamask</li>
					<li>Casper Signer</li>
				</ul>
				<span>
					Your app can interact with any of them using the same API. CSPR.click takes care of everything wallet related.
					If needed, you can{' '}
					<a href={'https://docs.cspr.click/core-js-sdk/types#csprclickinitoptions'} target={'_blank'} rel='noreferrer'>
						modify the list of enabled wallets
					</a>
					.
				</span>
			</Section>

			<h2>⚙️ Uniform UI/UX</h2>
			<Section>
				<span>
					CSPR.click UI components provide a common UX across different Casper apps for an easy management of accounts,
					settings, and future ecosystem-wide functionality.
				</span>
				<span>
					<a href={'https://docs.cspr.click/ui-sdk/customizing-the-top-bar'} target={'_blank'} rel='noreferrer'>
						Customize the elements in the top bar
					</a>{' '}
					according to your application requirements. Add and removesettings selectors.
				</span>
			</Section>

			<h2>🔝 Sign in</h2>
			<Section>
				<span>
					Now, go back to the top of the page and sign in with your favorite wallet. Or, click here:
					<b
						onClick={event => {
							event.preventDefault();
							window.csprclick.signIn();
						}}
					>
						{' '}
						Connect
					</b>
					.
				</span>
			</Section>
		</Container>
	);
};

const SignedInBrief = () => {
	return (
		<Container>
			<h2 style={{ marginTop: '48px' }}>🎉 Awesome! Your user has signed in! What next?</h2>
			<Section>
				<span>
					You&apos;re almost ready to start working on your app. But first, let&apos;s see a couple of features in the
					SDK you&apos;ll use often.
				</span>
			</Section>
			<h3>🪝️ useClickRef hook</h3>
			<UseClickRefHook />
			<h3>🆔 Get your user´s account and update your app</h3>
			<Account />
			<h3>🔧 Customize the account menu</h3>
			<CustomMenuItems />
			<h3>☕ Buy Alice a coffee on testnet</h3>
			<BuyMeACoffee />
			<h3>🔥 Happy hacking!</h3>
			<Section>
				<span>
					Finally! Time to focus on your new project! And, remember, you may find guides and examples in{' '}
					<a href={'https://docs.cspr.click'} target={'_blank'} rel='noreferrer'>
						our documentation
					</a>
					. Or you can reach to us on{' '}
					<a href={'https://t.me/CSPRDevelopers'} target={'_blank'} rel='noreferrer'>
						telegram
					</a>
					.
				</span>
			</Section>
		</Container>
	);
};

const GettingStarted = () => {
	const clickRef = useClickRef();
	const activeAccount = clickRef?.getActiveAccount();

	return activeAccount ? <SignedInBrief /> : <LandingBrief />;
};

export default GettingStarted;