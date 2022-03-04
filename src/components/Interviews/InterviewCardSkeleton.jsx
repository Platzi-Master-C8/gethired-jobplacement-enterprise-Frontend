import React from 'react';

import Skeleton from '@mui/material/Skeleton';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const CardSkeleton = () => (
    <Grid item xs={12} sm={6} lg={4} xl={4}>
        <Paper sx={{ p: 2, boxShadow: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Skeleton width={100} height={20} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Skeleton animation="wave" variant="circular" width={40} height={40} sx={{ mr: 2 }} />
                <Box>
                    <Skeleton width={100} height={20} />
                    <Skeleton width={100} height={20} />
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box>
                    <Skeleton width={100} height={20} />
                    <Skeleton width={100} height={20} />
                </Box>
                <Skeleton width={100} height={20} />
            </Box>
        </Paper>
    </Grid>
);

export const GroupSkeleton = () => (
    <Grid container spacing={3} sx={{ my: 2 }}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
    </Grid>
);
