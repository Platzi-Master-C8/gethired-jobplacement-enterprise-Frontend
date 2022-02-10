import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export const ApplicantItemCard = ({ name, vacancy, company, date }) => {
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr 0.7fr', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar alt="Applicant avatar" sx={{ mr: 2 }}>
                    <AccountCircleRoundedIcon />
                </Avatar>
                <Box>
                    <Typography>{name}</Typography>
                    <Typography variant="body2">{vacancy}</Typography>
                    <Typography variant="body2">{company}</Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="body2">{date}</Typography>
            </Box>
            <Button variant="contained" sx={{ maxHeight: 40 }}>
                See more
            </Button>
        </Box>
    );
};

ApplicantItemCard.propTypes = {
    name: PropTypes.string.isRequired,
    vacancy: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};
