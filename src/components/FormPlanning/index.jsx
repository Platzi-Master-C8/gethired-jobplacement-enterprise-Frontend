import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Typography } from '@mui/material';

export const FormPlanning = ({ interviewers, user }) => {
    return (
        <Paper>
            <Typography variant="h2" align="center">
                Create an interview for {user}
                {interviewers}
            </Typography>
        </Paper>
    );
};

FormPlanning.propTypes = {
    interviewers: PropTypes.arrayOf([PropTypes.string]).isRequired,
    user: PropTypes.string.isRequired,
};
