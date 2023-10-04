export * from './settings';
import { ClickTopBar, Lang, ThemeModeType } from '@make-software/csprclick-react';
import React, { useState } from 'react';
import {
	accountMenuItems,
	CURRENCIES,
	currencySettings,
	languageSettings,
	NETWORKS,
	networkSettings,
} from './settings';
import styled from 'styled-components';

const TopBarSection = styled.section(({ theme }) =>
	theme.withMedia({
		backgroundColor: theme.styleguideColors.backgroundTertiary,
	})
);

const TopBarContainer = styled.div(({ theme }) =>
	theme.withMedia({
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		maxWidth: ['540px', '720px', '960px'],
		margin: '0 auto',
	})
);

const TopBar = () => {
	const [lang, setLang] = useState<Lang>(Lang.EN);
	const [currency, setCurrency] = useState(CURRENCIES[0]);
	const [network, setNetwork] = useState<string>(NETWORKS[1]);
	const [themeMode, setThemeMode] = useState<ThemeModeType>(ThemeModeType.dark);

	return (
		<TopBarSection>
			<TopBarContainer>
				<ClickTopBar
					onThemeSwitch={() =>
						setThemeMode(themeMode === ThemeModeType.light ? ThemeModeType.dark : ThemeModeType.light)
					}
					themeMode={themeMode}
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
