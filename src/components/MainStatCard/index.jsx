import React from 'react';
import PropTypes from 'prop-types';

import { Box, Card, CardContent, Typography } from '@mui/material';

export const MainStatCard = ({ stat, title }) => {
    return (
        <Box>
            <Card sx={{ width: 160 }}>
                <CardContent>
                    <Typography variant="h2" align="left">
                        {stat}
                    </Typography>
                    <Typography>{title}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

MainStatCard.propTypes = {
    stat: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};
