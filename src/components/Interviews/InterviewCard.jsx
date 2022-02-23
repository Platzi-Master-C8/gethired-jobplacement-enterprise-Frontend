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
    status,
    name,
    location,
    experience,
    applyingFor,
    typeTime,
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

    return (
        <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Chip label={status} color="primary" />

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
                    {name.charAt(0)}
                </Avatar>
                <Box>
                    <Typography>{name}</Typography>
                    <Typography variant="body2">{location}</Typography>
                </Box>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={4}>
                    <Typography>Experience</Typography>
                    <Typography variant="body2">{experience}</Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Typography>Applying for</Typography>
                    <Typography variant="body2">{applyingFor}</Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Typography>Time</Typography>
                    <Typography variant="body2">{typeTime}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

InterviewCard.propTypes = {
    status: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    applyingFor: PropTypes.string.isRequired,
    typeTime: PropTypes.string.isRequired,
    cancelModal: PropTypes.func.isRequired,
    scheduleModal: PropTypes.func.isRequired,
    notificationModal: PropTypes.func.isRequired,
};
