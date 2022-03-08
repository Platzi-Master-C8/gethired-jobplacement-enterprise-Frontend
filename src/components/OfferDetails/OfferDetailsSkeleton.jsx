import React from 'react';
import { Skeleton, Typography, Box, Container, Divider } from '@mui/material';

export const LoadingOfferDetails = () => {
    return (
        <Container>
            <Typography variant="h3" my={2}>
                <Skeleton variant="rectangular" height={20} />
            </Typography>
            <Divider />
            <Typography variant="h3" my={2}>
                <Skeleton />
            </Typography>
            <Typography variant="body2" mb={2}>
                <Skeleton variant="rectangular" height={100} />
            </Typography>
            <Typography variant="h3" mb={1}>
                <Skeleton width={60} />
            </Typography>
            <Typography variant="h3" mb={1}>
                <Skeleton variant="rectangular" width={60} height={40} />
            </Typography>
            <Divider />
            <Typography variant="h3" mt={3} mb={1}>
                <Skeleton width={60} />
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={1}>
                <Typography variant="body2">
                    <Skeleton width={100} />
                </Typography>
                <Typography variant="body2">
                    <Skeleton width={60} />
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={1}>
                <Typography variant="body2">
                    <Skeleton width={100} />
                </Typography>
                <Typography variant="body2">
                    <Skeleton width={60} />
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={1}>
                <Typography variant="body2">
                    <Skeleton width={100} />
                </Typography>
                <Typography variant="body2">
                    <Skeleton width={60} />
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={2}>
                <Typography variant="body2">
                    <Skeleton width={100} />
                </Typography>
                <Typography variant="body2">
                    <Skeleton width={60} />
                </Typography>
            </Box>
        </Container>
    );
};
