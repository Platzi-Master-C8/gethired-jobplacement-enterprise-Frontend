import React, { useState } from 'react';

import { Header } from '@master-c8/commons';
import { useMediaQuery, useTheme } from '@mui/material';

import { HeaderMobile } from './HeaderMobile';
import { HeaderDesktop } from './HeaderDesktop';

export const HeaderEnterprise = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Header className="header-menu" isLogged>
            {isMatch ? <HeaderMobile openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} /> : <HeaderDesktop />}
        </Header>
    );
};
