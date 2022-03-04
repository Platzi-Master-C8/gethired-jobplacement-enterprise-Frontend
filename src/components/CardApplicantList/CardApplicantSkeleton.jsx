import React from 'react';
import { Skeleton, Typography, Card } from '@mui/material';

export const LoadingCardApplicant = () => {
    return (
        <Card>
            <Typography>
                <Skeleton />
            </Typography>
        </Card>
    );
};
