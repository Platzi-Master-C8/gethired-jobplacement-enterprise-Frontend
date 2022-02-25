/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { InterviewInformation } from 'Components/InterviewInformation';
import { FormPlanning } from 'Components/FormPlanning';

import { Container, Typography, Grid } from '@mui/material';

const InterviewCardData = {
    img: 'https://picsum.photos/300',
    companyName: 'Platzi',
    country: 'Mexico',
    dateWorking: new Date(),
    workers: 100,
    rating: 4.5,
    description: 'Lorem ipsum',
    interviewTitle: 'Title',
    dateMeeting: new Date(),
    location: 'https://zoom.us/',
    hour: new Date(),
    platform: 'zoom',
    interviewDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sit ratione reiciendis non sunt error assumenda eius doloribus, fugit quia consectetur, voluptas excepturi temporibus alias magnam. Modi sint tempore aperiam.',
};

export const InterviewPlanning = ({ user }) => {
    return (
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h2" align="center">
                Create an interview for {user}
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                <Grid item>
                    <FormPlanning />
                </Grid>
                <Grid item>
                    <InterviewInformation {...InterviewCardData} />
                </Grid>
            </Grid>
        </Container>
    );
};

InterviewPlanning.propTypes = {
    user: PropTypes.string,
};

InterviewPlanning.defaultProps = {
    user: 'candidate',
};
