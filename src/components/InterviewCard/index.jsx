import React from 'react';

import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Grid, Typography } from '@mui/material';

export const InterviewCard = () => {
    return (
        <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Chip label="In process" color="primary" />

                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar alt="Avatar" sx={{ mr: 2 }}>
                    P
                </Avatar>
                <Box>
                    <Typography>Candidate name</Typography>
                    <Typography variant="body2">Ubication</Typography>
                </Box>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={4}>
                    <Typography>Experience</Typography>
                    <Typography variant="body2">Time</Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Typography>Applying for</Typography>
                    <Typography variant="body2">Job</Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Typography>Time</Typography>
                    <Typography variant="body2">Type work</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};
