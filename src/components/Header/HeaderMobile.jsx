import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@mui/material/Avatar';
import { Box, MenuList, MenuItem, ListItemIcon, ListItemText, Drawer, IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';

import { Message, BriefCase, Notification, Blog, UserGroup, Currency, Menu } from '@master-c8/icons';

import { LogoutButton } from 'Components/AuthButtons';
import { LinkStyled } from './styles';

export const HeaderMobile = ({ openDrawer, setOpenDrawer }) => {
    return (
        <Box>
            <Drawer anchor="right" onClose={() => setOpenDrawer(false)} open={openDrawer}>
                <MenuList sx={{ display: 'block' }}>
                    <MenuItem>
                        <LinkStyled to="/">
                            <ListItemIcon>
                                <Message sx={{ color: grey[900] }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Message</ListItemText>
                        </LinkStyled>
                    </MenuItem>
                    <MenuItem>
                        <LinkStyled to="/">
                            <ListItemIcon>
                                <Notification sx={{ color: grey[900] }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Notifications</ListItemText>
                        </LinkStyled>
                    </MenuItem>
                    <MenuItem>
                        <LinkStyled to="/vacancies">
                            <ListItemIcon>
                                <BriefCase sx={{ color: grey[900] }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Vacancies</ListItemText>
                        </LinkStyled>
                    </MenuItem>
                    <MenuItem>
                        <LinkStyled to="/interviews">
                            <ListItemIcon>
                                <UserGroup sx={{ color: grey[900] }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Interviews</ListItemText>
                        </LinkStyled>
                    </MenuItem>
                    <MenuItem>
                        <LinkStyled to="/postulations">
                            <ListItemIcon>
                                <Blog sx={{ color: grey[900] }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Postulations</ListItemText>
                        </LinkStyled>
                    </MenuItem>
                    <MenuItem>
                        <LinkStyled to="/">
                            <ListItemIcon>
                                <Currency sx={{ color: grey[900] }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'black' }}>Calculator</ListItemText>
                        </LinkStyled>
                    </MenuItem>
                    <MenuItem sx={{ justifyContent: 'center' }}>
                        <ListItemIcon sx={{ color: 'black' }} size="large">
                            <Avatar sx={{ bgcolor: '#AE4EFF', width: 45, height: 45 }} alt="Profile" />
                        </ListItemIcon>
                    </MenuItem>
                    <MenuItem sx={{ justifyContent: 'center' }}>
                        <LogoutButton size="large" sx={{ width: '60%' }} />
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
    openDrawer: PropTypes.bool.isRequired,
    setOpenDrawer: PropTypes.func.isRequired,
};
