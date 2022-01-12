import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Typography, Grid } from '@mui/material';
import { Img } from './styles';

export const InterviewerCard = ({ img, name, roleRecruiter }) => {
    return (
        <Paper sx={{ p: 3 }}>
            <Grid container>
                <Grid item>
                    <Img src={img} alt={name} />
                </Grid>
                <Grid item sx={{ m: 2 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                        {name}
                    </Typography>
                    <Typography variant="subtitle2">{roleRecruiter}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

InterviewerCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    roleRecruiter: PropTypes.string.isRequired,
};
