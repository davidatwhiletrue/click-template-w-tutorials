import React from 'react';
import styled from 'styled-components';
import { AccountType } from '@make-software/csprclick-types';
import Account from './components/Account';
import BuyMeACoffee from './components/BuyMeACoffee';
import CustomMenuItems from "./components/CustomMenuItems";

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
			<h2>🎉 Your user has signed in! What next?</h2>
			<h3>🆔 Get your user´s account and update your app</h3>
			<Account />
			<h3>🔧 Customize the account menu</h3>
			<CustomMenuItems />
			<h3>☕ Buy Alice a coffee on testnet</h3>
			<BuyMeACoffee />
		</AccountInfoContainer>
	);
};
