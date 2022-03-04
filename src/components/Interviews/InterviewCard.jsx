/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinkIcon from '@mui/icons-material/Link';

import { format } from 'date-fns';

export const InterviewCard = ({
    id,
    platform,
    statusFinished,
    url,
    date,
    cancelModal,
    scheduleModal,
    notificationModal,
    setCurrentInterview,
}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dateFns = new Date(date);
    const formattedDate = format(dateFns, 'MMMM dd, yyyy');
    const hour = dateFns.getHours();
    const minute = dateFns.getMinutes();

    return (
        <Paper sx={{ p: 2, boxShadow: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Chip label={statusFinished || 'Active'} color="secondary" />

                <IconButton aria-label="settings" id="list-options" onClick={handleClick}>
                    <MoreVertIcon
                        sx={{
                            color: 'rgba(0, 0, 0, 0.54)',
                            fill: 'currentColor',
                            stroke: 'none',
                        }}
                    />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'list-options',
                    }}
                >
                    <MenuItem
                        onClick={() => {
                            handleClose();
                            cancelModal();
                            setCurrentInterview(id);
                        }}
                    >
                        Cancel
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleClose();
                            scheduleModal();
                            setCurrentInterview(id);
                        }}
                    >
                        Reschedule
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleClose();
                            notificationModal();
                            setCurrentInterview(id);
                        }}
                    >
                        Notification
                    </MenuItem>
                </Menu>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar alt="Avatar" sx={{ mr: 2 }}>
                    A
                </Avatar>
                <Box>
                    <Typography>Name</Typography>
                    <Typography variant="body2">Location</Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box>
                    <Typography variant="body1">{formattedDate}</Typography>
                    <Typography variant="body2">{`${hour}:${minute}`}</Typography>
                </Box>

                <Button
                    href={url}
                    target="_blank"
                    size="small"
                    startIcon={
                        <LinkIcon
                            sx={{
                                color: 'rgba(0, 0, 0, 0.54)',
                                fill: 'currentColor',
                                stroke: 'none',
                            }}
                        />
                    }
                >
                    {platform}
                </Button>
            </Box>
        </Paper>
    );
};

InterviewCard.propTypes = {
    id: PropTypes.number.isRequired,
    platform: PropTypes.string,
    statusFinished: PropTypes.string,
    url: PropTypes.string,
    date: PropTypes.string.isRequired,
    cancelModal: PropTypes.func.isRequired,
    scheduleModal: PropTypes.func.isRequired,
    notificationModal: PropTypes.func.isRequired,
    setCurrentInterview: PropTypes.func.isRequired,
};

InterviewCard.defaultProps = {
    platform: 'Zoom',
    statusFinished: 'Finished',
    url: 'https://zoom.us/j/123456789',
};
