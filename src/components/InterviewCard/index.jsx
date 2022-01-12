import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Grid, Typography } from '@mui/material';

export const InterviewCard = ({ status, name, location, experience, applyingFor, typeTime }) => {
    return (
        <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Chip label={status} color="primary" />

                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
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
};
