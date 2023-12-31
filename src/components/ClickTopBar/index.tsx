import { useState } from 'react';
import { ClickTopBar, Lang, ThemeModeType } from '@make-software/csprclick-ui';
import {
	accountMenuItems,
	CURRENCIES,
	currencySettings,
	languageSettings,
	NETWORKS,
	networkSettings,
} from './settings';
import styled from 'styled-components';
export * from './settings';

const TopBarSection = styled.section(({ theme }) => ({
	backgroundColor: theme.topBarBackground,
}));

const TopBarContainer = styled.div(({ theme }) =>
	theme.withMedia({
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		maxWidth: ['540px', '720px', '960px'],
		margin: '0 auto',
	})
);

export interface TopBarProps {
	themeMode: ThemeModeType | undefined;
	onThemeSwitch: () => void;
}

const TopBar = ({ themeMode, onThemeSwitch }: TopBarProps) => {
	const [lang, setLang] = useState<Lang>(Lang.EN);
	const [currency, setCurrency] = useState(CURRENCIES[0]);
	const [network, setNetwork] = useState<string>(NETWORKS[1]);

	return (
		<TopBarSection>
			<TopBarContainer>
				<ClickTopBar
					themeMode={themeMode}
					onThemeSwitch={onThemeSwitch}
					accountMenuItems={accountMenuItems}
					languageSettings={languageSettings(lang, setLang)}
					currencySettings={currencySettings(currency, setCurrency)}
					networkSettings={networkSettings(network, setNetwork)}
				/>
			</TopBarContainer>
		</TopBarSection>
	);
};

export default TopBar;
