import React, { Fragment } from 'react';

import { Skeleton, Box, Container, Divider } from '@mui/material';

const LoadingVacancyHistory = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Skeleton variant="text" width={100} height={40} />
                <Skeleton variant="text" width={200} height={40} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '20%' }}>
                    <Skeleton variant="text" width={50} height={50} />
                    <Skeleton variant="text" width={80} height={50} />
                </Box>
                <Skeleton variant="text" width={150} height={50} />
            </Box>
            <Box>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Skeleton variant="rectangular" width={80} height={30} />
                <Skeleton variant="rectangular" width={80} height={30} />
            </Box>
            <Divider sx={{ mt: 2 }} />
        </Container>
    );
};

export const SkeletonVacancy = () => {
    return (
        <Fragment>
            <LoadingVacancyHistory />
            <LoadingVacancyHistory />
            <LoadingVacancyHistory />
            <LoadingVacancyHistory />
            <LoadingVacancyHistory />
            <LoadingVacancyHistory />
            <LoadingVacancyHistory />
            <LoadingVacancyHistory />
        </Fragment>
    );
};
