import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@mui/material/Avatar';
import { Box, MenuList, MenuItem, Link, ListItemIcon, ListItemText, Drawer, IconButton } from '@mui/material';
import { Message, BriefCase, Notification, Blog, UserGroup, Website, Menu } from '@master-c8/icons';
import { grey } from '@mui/material/colors';

export const HeaderMobile = ({ openDrawer, setOpenDrawer }) => {
    return (
        <Box>
            <Drawer anchor="right" onClose={() => setOpenDrawer(false)} open={openDrawer}>
                <MenuList sx={{ display: 'block' }}>
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
                            href="/interviews"
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
                            href="/interviews"
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
                            href="/interviews"
                        >
                            <ListItemIcon>
                                <Website sx={{ color: grey[900] }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Contacts</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem sx={{ justifyContent: 'center' }}>
                        <ListItemIcon sx={{ color: 'black' }} size="large">
                            <Avatar sx={{ bgcolor: '#AE4EFF', width: 45, height: 45 }} alt="Profile" />
                        </ListItemIcon>
                    </MenuItem>
                </MenuList>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <Menu />
            </IconButton>
        </Box>
    );
};

HeaderMobile.propTypes = {
    openDrawer: PropTypes.instanceOf.isRequired,
    setOpenDrawer: PropTypes.instanceOf.isRequired,
};
