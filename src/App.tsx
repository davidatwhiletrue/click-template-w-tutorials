import React, {useEffect, useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeModeType } from '@make-software/csprclick-react';
import {
    ClickTopBar,
    Lang, useClickRef,
} from '@make-software/csprclick-react';
import {
  accountMenuItems,
  currencySettings,
  CURRENCIES,
  networkSettings,
  languageSettings,
  AppTheme,
  NETWORKS
} from "./settings";
import './App.css';
import Account from "./components/Account";
import BuyMeACoffee from "./components/BuyMeACoffee";

const FlexRow = styled.div(({ theme }) =>
  theme.withMedia({
    display: "flex",
    flexDirection: "row",
  })
);
const FlexColumn = styled.div(({ theme }) =>
  theme.withMedia({
    display: "flex",
    flexDirection: "column",
  })
);

const TopBarContainer = styled.section(({ theme }) =>
    theme.withMedia({
        backgroundColor: theme.styleguideColors.backgroundTertiary
    })
);

const ContentContainer = styled.div(({ theme }) =>
    theme.withMedia({
        backgroundColor: theme.backgroundColor,
    })
);

const AccountInfoContainer = styled(FlexColumn)(({ theme }) =>
    theme.withMedia({
        paddingTop: "36px",
        minHeight: "100vh"
    })
);

const Container = styled.div(({ theme }) =>
    theme.withMedia({
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: ["540px", "720px", "960px"],
        margin: "0 auto"
    })
);

const AppContainer= styled.div(({ theme }) =>
    theme.withMedia({
        width: "100%",
        maxWidth: ["540px", "720px", "960px"],
        padding: "0 12px",
        margin: "0 auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: theme.styleguideColors.contentPrimary,
        h3: { fontSize: "calc(12px + 2vmin)", fontWeight: "regular" },
        h5: { fontSize: "calc(10px + 2vmin)", fontWeight: "300", textAlign: 'center' },
        a: {
            "color": theme.reactTemplateColor,
        },
    })
);

export const StyledSvgIcon = styled.div(
    ({ theme }) =>
        theme.withMedia({
             height: '30vmin !important', width: '30vmin !important' ,
            svg : {
                height: '30vmin',
                width: '30vmin',
                path: { stroke: theme.reactTemplateColor, fill: 'none' } }
        })
);

const App = () => {

    const [lang, setLang] = useState<Lang>(Lang.EN);
    const [currency, setCurrency] = useState(CURRENCIES[0]);
    const [network, setNetwork] = useState<string>(NETWORKS[1]);
    const [themeMode, setThemeMode] = useState<ThemeModeType>(ThemeModeType.dark);
    const [activeAccount, setActiveAccount] = React.useState<any>(null);

    const clickRef = useClickRef();

    useEffect(() => {
        if (clickRef === undefined) return;

        clickRef.on('csprclick:signed_in', async (evt: any) => {
            await setActiveAccount(evt.account);
        });
        clickRef.on('csprclick:switched_account', async (evt: any) => {
            await setActiveAccount(evt.account);
        });
        clickRef.on('csprclick:signed_out', async (evt: any) => {
            setActiveAccount(null);
        });
        clickRef.on('csprclick:disconnected', async (evt: any) => {
            setActiveAccount(null);
        });
    }, [clickRef]);

    return (
        <ThemeProvider theme={AppTheme[themeMode]}>
            <TopBarContainer>
                <Container>
                    <FlexRow>
                        <ClickTopBar
                            onThemeSwitch={() => setThemeMode(themeMode === ThemeModeType.light ?
                                ThemeModeType.dark : ThemeModeType.light)}
                            themeMode={themeMode}
                            accountMenuItems={accountMenuItems}
                            languageSettings={languageSettings(lang, setLang)}
                            currencySettings={currencySettings(currency, setCurrency)}
                            networkSettings={networkSettings(network, setNetwork)}
                        />
                    </FlexRow>
                </Container>
            </TopBarContainer>
            <ContentContainer>
                <Container>
                    {activeAccount ?
                        <AccountInfoContainer>
                            <Account publicKey={activeAccount.public_key} provider={activeAccount.provider}/>
                            {activeAccount.public_key && <BuyMeACoffee publicKey={activeAccount.public_key} />}
                        </AccountInfoContainer>
                    :   <AppContainer>
                            <StyledSvgIcon className="App-logo">
                                <svg width="86" height="88" viewBox="0 0 86 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M81.8224 32.5H59.9999C58.6192 32.5 57.4999 31.3807 57.4999 30L57.4999 25.1761C57.4999 18.9556 50.3633 15.4389 45.4306 19.2287L20.2789 38.5526C16.3713 41.5548 16.3713 47.4452 20.2789 50.4474L45.4306 69.7713C50.3633 73.5611 57.4999 70.0444 57.4999 63.8239L57.4999 58C57.4999 56.6193 58.6192 55.5 59.9999 55.5H81.8224C83.4952 55.5 84.4995 57.0016 84.0259 58.3246C78.1465 74.7511 62.4434 86.5 44 86.5C20.5279 86.5 1.5 67.4721 1.5 44C1.5 20.5279 20.5279 1.5 44 1.5C62.4434 1.5 78.1465 13.2489 84.0259 29.6754C84.4995 30.9984 83.4952 32.5 81.8224 32.5Z"
                                        strokeWidth="3"/>
                                </svg>
                            </StyledSvgIcon>
                            <h3>Welcome to CSPR.click</h3>
                            <h5>This is your starting point to develop<br/>the next web3 killer app 🚀</h5>
                            <h5>Learn more <a href="/docs">CSPR.click docs</a></h5>
                        </AppContainer>
                    }
                </Container>
            </ContentContainer>
        </ThemeProvider>
    )
};

export default App;