import React, { Fragment } from 'react';
import { Skeleton, Typography, Box, Divider } from '@mui/material';

const TableRow = () => {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Typography my={2}>
                    <Skeleton width={20} />
                </Typography>
                <Typography my={2}>
                    <Skeleton width={40} />
                </Typography>
                <Typography my={2}>
                    <Skeleton width={40} />
                </Typography>
                <Typography my={2}>
                    <Skeleton width={40} />
                </Typography>
                <Typography my={2}>
                    <Skeleton width={40} />
                </Typography>
                <Typography my={2}>
                    <Skeleton width={40} />
                </Typography>
            </Box>
        </Box>
    );
};

export const LoadingTable = () => {
    return (
        <Fragment>
            <TableRow />
            <Divider />
            <TableRow />
            <Divider />
            <TableRow />
            <Divider />
            <TableRow />
        </Fragment>
    );
};
