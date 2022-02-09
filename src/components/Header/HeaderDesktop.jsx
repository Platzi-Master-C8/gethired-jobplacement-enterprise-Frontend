import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Menu, MenuList, MenuItem, Link, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Message, BriefCase, Notification, Blog, UserGroup, Currency } from '@master-c8/icons';
import { grey } from '@mui/material/colors';
import { LogoutButton } from 'Components/AuthButtons';

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
                        <Currency sx={{ color: grey[900] }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: 'black' }}>Calculator</ListItemText>
                </Link>
            </MenuItem>
            <Box>
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
