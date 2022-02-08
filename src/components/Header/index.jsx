import React, { useState } from 'react';

import { Header } from '@master-c8/commons';
import { useMediaQuery, useTheme } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

import { HeaderMobile } from './HeaderMobile';
import { HeaderDesktop } from './HeaderDesktop';

export const HeaderEnterprise = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        <Header
            className="header-menu"
            isLogged={isAuthenticated}
            onClickLogin={() => loginWithRedirect()}
            onClickSignup={() =>
                loginWithRedirect({
                    screen_hint: 'signup',
                })
            }
        >
            {isMatch ? <HeaderMobile openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} /> : <HeaderDesktop />}
        </Header>
    );
};
