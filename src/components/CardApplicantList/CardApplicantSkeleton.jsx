import React, { Fragment } from 'react';
import { Skeleton, Typography, Card, Grid } from '@mui/material';

const LoadingCardApplicant = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2} sm={2} md={2}>
                <Skeleton variant="circular" width={40} height={40} />
            </Grid>
            <Grid item xs={10} sm={10} md={10}>
                <Typography variant="h3">
                    <Skeleton />
                </Typography>
                <Typography variant="body2">
                    <Skeleton />
                </Typography>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
                <Typography variant="body2">
                    <Skeleton />
                </Typography>
            </Grid>
            <Grid item xs={9} sm={9} md={9}>
                <Typography variant="body2">
                    <Skeleton />
                </Typography>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
                <Typography variant="body2">
                    <Skeleton />
                </Typography>
            </Grid>
            <Grid item xs={9} sm={9} md={9}>
                <Typography variant="body2">
                    <Skeleton />
                </Typography>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
                <Typography variant="body2">
                    <Skeleton />
                </Typography>
            </Grid>
            <Grid item xs={9} sm={9} md={9}>
                <Typography variant="body2">
                    <Skeleton />
                </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
                <Skeleton />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
                <Skeleton />
            </Grid>
        </Grid>
    );
};

export const LoadingCardSkeleton = () => {
    return <LoadingCardApplicant />;
};

export const LoadingCardsSkeleton = () => {
    return (
        <Fragment>
            <Card sx={{ p: 2, boxShadow: 3, m: 2 }}>
                <LoadingCardApplicant />
            </Card>
            <Card sx={{ p: 2, boxShadow: 3, m: 2 }}>
                <LoadingCardApplicant />
            </Card>
        </Fragment>
    );
};
