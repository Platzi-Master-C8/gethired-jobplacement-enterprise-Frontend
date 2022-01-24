import React, { useState } from 'react';

import { Header } from '@master-c8/commons';
import Avatar from '@mui/material/Avatar';
import { MenuList, MenuItem, Link, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Message, BriefCase, Notification, Blog, UserGroup, Website } from '@master-c8/icons';
import { grey } from '@mui/material/colors';

import { HeaderMobile } from './HeaderMobile';

const HeaderEnterprise = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Header className="header-menu" isLogged>
            {isMatch ? (
                <HeaderMobile openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            ) : (
                <MenuList sx={{ display: 'flex' }}>
                    <MenuItem>
                        <Link
                            sx={{
                                flexDirection: { sm: 'row', md: 'column' },
                                display: 'flex',
                                textDecoration: 'none',
                                alignItems: 'center',
                            }}
                            size="small"
                            href="/"
                        >
                            <ListItemIcon>
                                <Message sx={{ color: grey[900] }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Message</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            sx={{
                                flexDirection: { sm: 'row', md: 'column' },
                                display: 'flex',
                                textDecoration: 'none',
                                alignItems: 'center',
                            }}
                            size="small"
                            href="/"
                        >
                            <ListItemIcon>
                                <Notification sx={{ color: grey[900] }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Notifications</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            sx={{
                                flexDirection: { sm: 'row', md: 'column' },
                                display: 'flex',
                                textDecoration: 'none',
                                alignItems: 'center',
                            }}
                            size="small"
                            href="/"
                        >
                            <ListItemIcon>
                                <BriefCase sx={{ color: grey[900] }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Vacancies</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            sx={{
                                flexDirection: { sm: 'row', md: 'column' },
                                display: 'flex',
                                textDecoration: 'none',
                                alignItems: 'center',
                            }}
                            size="small"
                            href="/#/interviews"
                        >
                            <ListItemIcon>
                                <UserGroup sx={{ color: grey[900] }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Interviews</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            sx={{
                                flexDirection: { sm: 'row', md: 'column' },
                                display: 'flex',
                                textDecoration: 'none',
                                alignItems: 'center',
                            }}
                            size="small"
                            href="/"
                        >
                            <ListItemIcon>
                                <Blog sx={{ color: grey[900] }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Postulations</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            sx={{
                                flexDirection: { sm: 'row', md: 'column' },
                                display: 'flex',
                                textDecoration: 'none',
                                alignItems: 'center',
                            }}
                            size="small"
                            href="/"
                        >
                            <ListItemIcon>
                                <Website sx={{ color: grey[900] }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Contacts</ListItemText>
                        </Link>
                    </MenuItem>
                    <ListItemIcon sx={{ display: 'flex', alignItems: 'center', color: 'black' }} size="large">
                        <Avatar sx={{ bgcolor: '#AE4EFF', width: 45, height: 45, ml: 3 }} alt="Profile" />
                    </ListItemIcon>
                </MenuList>
            )}
        </Header>
    );
};

export default HeaderEnterprise;
