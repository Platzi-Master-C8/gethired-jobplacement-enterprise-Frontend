/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const InterviewCard = ({
    id,
    platform,
    statusFinished,
    url,
    type,
    cancelModal,
    scheduleModal,
    notificationModal,
}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickChip = (event) => {
        event.preventDefault();
        window.open(url, '_blank');
    };

    return (
        <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Chip label={statusFinished} color="primary" />

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
                        }}
                    >
                        Cancel
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleClose();
                            scheduleModal();
                        }}
                    >
                        Reschedule
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleClose();
                            notificationModal();
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

            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={4}>
                    <Typography>Experience</Typography>
                    <Chip
                        label={platform}
                        key={platform}
                        variant="filled"
                        color="secondary"
                        onClick={handleClickChip}
                    />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Typography>Applying for</Typography>
                    <Typography variant="body2">Apply</Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Typography>Time</Typography>
                    <Typography variant="body2">time</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

InterviewCard.propTypes = {
    id: PropTypes.number.isRequired,
    platform: PropTypes.string,
    statusFinished: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
    cancelModal: PropTypes.func.isRequired,
    scheduleModal: PropTypes.func.isRequired,
    notificationModal: PropTypes.func.isRequired,
};

InterviewCard.defaultProps = {
    platform: 'Zoom',
    statusFinished: 'Finished',
    url: 'https://zoom.us/j/123456789',
    type: 'Remote',
};
