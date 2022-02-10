import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export const OfferDetails = ({ description, hoursWeek, budget, experience, startDate }) => {
    return (
        <Fragment>
            <Typography variant="h2" mb={2}>
                Offer Details
            </Typography>
            <Paper sx={{ p: 2 }} elevation={3}>
                <Typography variant="h3" mb={1}>
                    Description
                </Typography>
                <Typography variant="body2" mb={3}>
                    {description}
                </Typography>
                <Divider />
                <Typography variant="h3" mt={3} mb={1}>
                    Checklist
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={1}>
                    <Typography variant="body2">Hours peer week</Typography>
                    <Typography variant="body2">{hoursWeek}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={1}>
                    <Typography variant="body2">Maximum budget</Typography>
                    <Typography variant="body2">{budget}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={1}>
                    <Typography variant="body2">Minimun experience</Typography>
                    <Typography variant="body2">{experience}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={3}>
                    <Typography variant="body2">Star date</Typography>
                    <Typography variant="body2">{startDate}</Typography>
                </Box>
                <Divider />
                <Typography variant="h3" mt={3} mb={1}>
                    Documents
                </Typography>
            </Paper>
        </Fragment>
    );
};

OfferDetails.propTypes = {
    description: PropTypes.string.isRequired,
    hoursWeek: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
};
