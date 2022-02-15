import React from 'react';
import { ThemeProvider } from '@master-c8/theme';
import { Auth0Provider } from '@auth0/auth0-react';

import Routes from 'Routes';

import 'Styles/style.scss';

const App = () => (
    <React.StrictMode>
        <ThemeProvider>
            <Auth0Provider
                domain={process.env.DOMAIN}
                clientId={process.env.CLIENTID}
                redirectUri={window.location.origin}
            >
                <Routes />
            </Auth0Provider>
        </ThemeProvider>
    </React.StrictMode>
);

export default App;
