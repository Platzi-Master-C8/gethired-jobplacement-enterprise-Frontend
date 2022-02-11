import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import { Menu, MenuList, MenuItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

import { Message, BriefCase, Notification, Blog, UserGroup, Currency } from '@master-c8/icons';

import { LogoutButton } from 'Components/AuthButtons';

import { LinkStyled } from './styles';

export const HeaderDesktop = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MenuList sx={{ display: 'flex' }}>
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
            <Box sx={{ display: 'flex' }}>
                <ListItemIcon
                    onClick={handleClick}
                    sx={{ display: 'flex', alignItems: 'center', color: 'black' }}
                    size="large"
                >
                    <Avatar sx={{ bgcolor: '#AE4EFF', width: 45, height: 45, ml: 3 }} alt="Profile" />
                </ListItemIcon>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem>
                        <LogoutButton />
                    </MenuItem>
                </Menu>
            </Box>
        </MenuList>
    );
};
