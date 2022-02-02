import React from 'react';
import Grid from '@mui/material/Grid';
import Jobs from './Jobs';

const JobOffers = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3}>
                Filtro
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
                <Jobs />
            </Grid>
        </Grid>
    );
};

export default JobOffers;
