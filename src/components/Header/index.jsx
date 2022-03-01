import React, { useState } from 'react';

import { Header } from '@master-c8/commons';
import { useMediaQuery, useTheme, MenuList, MenuItem, ListItemIcon, ListItemText, Link } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

import { grey } from '@mui/material/colors';
import { Currency } from '@master-c8/icons';
import { HeaderMobile } from './HeaderMobile';
import { HeaderDesktop } from './HeaderDesktop';

const SalariesLink = () => (
    <MenuList>
        <MenuItem>
            <Link
                sx={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    display: 'flex',
                    textDecoration: 'none',
                }}
                href={`${process.env.SALARIES_URL}`}
            >
                <ListItemIcon>
                    <Currency sx={{ color: grey[900] }} />
                </ListItemIcon>
                <ListItemText sx={{ color: 'black' }}>Calculator</ListItemText>
            </Link>
        </MenuItem>
    </MenuList>
);

export const HeaderEnterprise = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        <Header
            className="header-menu"
            isLogged={isAuthenticated}
            notLogeedComponent={!isAuthenticated && SalariesLink}
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
