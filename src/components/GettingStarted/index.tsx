import React from 'react';
import styled from 'styled-components';
import { AccountType } from '@make-software/csprclick-types';
import Account from './components/Account';
import BuyMeACoffee from './components/BuyMeACoffee';
import CustomMenuItems from "./components/CustomMenuItems";
import {SectionContainer} from "./components";
import UseClickRefHook from "./components/UseClickRefHook";

const AccountInfoContainer = styled.div(({ theme }) =>
	theme.withMedia({
		display: 'flex',
		flexDirection: 'column',
		paddingTop: '36px',
		minHeight: '100vh',
		color: theme.styleguideColors.contentPrimary,
	})
);

export type GettingStartedProps = {
	account: AccountType;
};
export const GettingStarted = ({ account }: GettingStartedProps) => {
	return (
		<AccountInfoContainer>
			<h2>🎉 Awesome! Your user has signed in! What next?</h2>
			<SectionContainer background={'unset'}>
				<span>
					You&apos;re almost ready to start working on your app. But first, let&apos;s see a couple of features in the SDK
					you&apos;ll use often.
				</span>
			</SectionContainer>
			<h3>🪝️ useClickRef hook</h3>
			<UseClickRefHook />
			<h3>🆔 Get your user´s account and update your app</h3>
			<Account />
			<h3>🔧 Customize the account menu</h3>
			<CustomMenuItems />
			<h3>☕ Buy Alice a coffee on testnet</h3>
			<BuyMeACoffee />
			<h3>🔥 Happy hacking!</h3>
			<SectionContainer background={'unset'}>
				<span>Finally! Time to focus on your new project! And, remember, you may find guides and examples in <a href={'https://docs.cspr.click'}
					target={'_blank'} rel="noreferrer">our documentation</a>. Or you can reach to us in our telegram.
				</span>
			</SectionContainer>
		</AccountInfoContainer>
	);
};
