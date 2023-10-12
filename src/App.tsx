import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useClickRef, ThemeModeType } from '@make-software/csprclick-ui';
import ClickTopBar from './components/ClickTopBar';
import GettingStarted from './components/GettingStarted';
import Container from './components/container';
import { AppTheme } from "./theme";

const AppContainer = styled(Container)(({ theme }) =>
	theme.withMedia({
		maxWidth: ['540px', '720px', '960px'],
		padding: '0 12px',
		margin: '0 auto',
		minHeight: '100vh',
		alignItems: 'center',
		justifyContent: 'center',
	})
);

const GettingStartedContainer = styled.div(({ theme }) =>
	theme.withMedia({
		maxWidth: ['540px', '720px', '960px'],
		padding: '0 12px',
		margin: '0 auto',
	})
);

export const StyledSvgIcon = styled.div(({ theme }) =>
	theme.withMedia({
		svg: {
			height: '92px',
			width: '92px',
			path: { fill: theme.clickLogo },
		},
	})
);

const App = () => {
	const clickRef = useClickRef();
	const [themeMode, setThemeMode] = useState<ThemeModeType>(ThemeModeType.dark);
	const [activeAccount, setActiveAccount] = useState<any>(null);

	useEffect(() => {
		clickRef?.on('csprclick:signed_in', async (evt: any) => {
			await setActiveAccount(evt.account);
		});
		clickRef?.on('csprclick:switched_account', async (evt: any) => {
			await setActiveAccount(evt.account);
		});
		clickRef?.on('csprclick:signed_out', async (evt: any) => {
			setActiveAccount(null);
		});
		clickRef?.on('csprclick:disconnected', async (evt: any) => {
			setActiveAccount(null);
		});
	}, [clickRef?.on]);

	const handleReadMore = () => {
		const gettingStartedContainer = document.getElementById('getting-started');
		// eslint-disable-next-line no-debugger
		gettingStartedContainer?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
	return (
		<ThemeProvider theme={AppTheme[themeMode]}>
			<ClickTopBar
				themeMode={themeMode}
				onThemeSwitch={() => setThemeMode(themeMode === ThemeModeType.light ? ThemeModeType.dark : ThemeModeType.light)}
			/>
			<Container>
				{!activeAccount && (
					<AppContainer>
						<StyledSvgIcon className='App-logo'>
							<svg width='86' height='88' viewBox='0 0 86 88' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M81.8224 32.5H59.9999C58.6192 32.5 57.4999 31.3807 57.4999 30L57.4999 25.1761C57.4999 18.9556 50.3633 15.4389 45.4306 19.2287L20.2789 38.5526C16.3713 41.5548 16.3713 47.4452 20.2789 50.4474L45.4306 69.7713C50.3633 73.5611 57.4999 70.0444 57.4999 63.8239L57.4999 58C57.4999 56.6193 58.6192 55.5 59.9999 55.5H81.8224C83.4952 55.5 84.4995 57.0016 84.0259 58.3246C78.1465 74.7511 62.4434 86.5 44 86.5C20.5279 86.5 1.5 67.4721 1.5 44C1.5 20.5279 20.5279 1.5 44 1.5C62.4434 1.5 78.1465 13.2489 84.0259 29.6754C84.4995 30.9984 83.4952 32.5 81.8224 32.5Z'
									strokeWidth='3'
								/>
							</svg>
						</StyledSvgIcon>
						<h3>Welcome to CSPR.click</h3>
						<h5>
							This is your starting point to develop
							<br />
							the next web3 killer app 🚀
						</h5>
						<h5>
							<a onClick={handleReadMore}>Read more 👇</a>
						</h5>
					</AppContainer>
				)}
				<GettingStartedContainer id={'getting-started'}>
					<GettingStarted />
				</GettingStartedContainer>
			</Container>
		</ThemeProvider>
	);
};

export default App;
