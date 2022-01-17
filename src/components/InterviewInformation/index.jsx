import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Typography, Grid, Button } from '@mui/material';
import { InterviewerCard } from 'Components/InterviewerCard';
import { Container, Img } from './styles';

export const InterviewInformation = ({
    img,
    companyName,
    country,
    dateWorking,
    workers,
    rating,
    description,
    interviewTitle,
    dateMeeting,
    hour,
    platform,
    location,
    interviewDescription,
}) => {
    return (
        <Paper sx={{ p: 3, width: 400 }}>
            <Container>
                <Img src={img} alt={companyName} />
            </Container>
            <Typography variant="h2" align="center">
                {companyName}
            </Typography>
            <Typography variant="subtitle2" align="center" sx={{ mb: 2 }}>
                {country}
            </Typography>
            <Grid container sx={{ mb: 2 }}>
                <Grid item xs={4}>
                    <Typography variant="subtitle1" align="center" sx={{ mb: 1 }}>
                        Working since
                    </Typography>
                    <Typography variant="subtitle2" align="center">
                        {dateWorking.getFullYear()}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle1" align="center" sx={{ mb: 1 }}>
                        Workers
                    </Typography>
                    <Typography variant="subtitle2" align="center">
                        {workers}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle1" align="center" sx={{ mb: 1 }}>
                        Rating
                    </Typography>
                    <Typography variant="subtitle2" align="center">
                        {rating}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="body1" sx={{ mb: 2 }}>
                {description}
            </Typography>
            <Typography variant="h2" align="center" sx={{ mb: 1 }}>
                {interviewTitle}
            </Typography>
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="subtitle2" align="center">
                        Date {dateMeeting.getFullYear()}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle2" align="center">
                        Hour {hour.getFullYear()}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle2" align="center">
                        Platform {platform}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="body1" sx={{ mb: 1, mt: 1 }}>
                <a href={location}>{location}</a>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                {interviewDescription}
            </Typography>
            <InterviewerCard name="Lorem ipsum" img="https://picsum.photos/300" roleRecruiter="Recruiter" />
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                    <Button sx={{ width: '100%' }} variant="contained">
                        Accept
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button sx={{ width: '100%' }} variant="outlined">
                        Decline
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button sx={{ width: '100%' }} variant="outlined">
                        Propose another schedule {'>'}
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

InterviewInformation.propTypes = {
    img: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    dateWorking: PropTypes.instanceOf(Date).isRequired,
    workers: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    interviewTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dateMeeting: PropTypes.instanceOf(Date).isRequired,
    hour: PropTypes.instanceOf(Date).isRequired,
    platform: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    interviewDescription: PropTypes.string.isRequired,
};
