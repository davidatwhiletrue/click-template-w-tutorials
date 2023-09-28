import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CsprClickInitOptions } from '@make-software/csprclick-web-sdk';
import { ClickProvider } from '@make-software/csprclick-react';
import { CONTENT_MODE } from '@make-software/csprclick-types';
import App from './App';

const clickOptions: CsprClickInitOptions = {
    appName: 'CSPR.app',
    contentMode: CONTENT_MODE.IFRAME,
    providers: [
        'casper-wallet',
        'ledger',
        'torus-wallet',
        'casperdash',
        'casper-signer',
    ],
    appId: 'csprclick-template',
    csprclickHost: 'https://casper-click-static.dev.make.services',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ClickProvider options={clickOptions}>
            <App/>
        </ClickProvider>
    </React.StrictMode>
);