import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

import { CardApplicantList } from '../components/CardApplicantList/CardApplicantList';
import { OfferDetails } from '../components/OfferDetails/index';
import { RecruitmentProcess } from '../components/RecruitmentProcess';
import { OtherPostulations } from '../components/OtherPostulations';

export const PostulationDetail = () => {
    return (
        <Container sx={{ pt: 2 }}>
            <Grid
                sx={{
                    display: 'flex',
                    gap: '2rem',
                }}
            >
                <Grid item xs={12} sm={4}>
                    <Typography variant="h2" mb={2}>
                        Postulant
                    </Typography>
                    <CardApplicantList />
                    <OfferDetails />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <RecruitmentProcess />
                    <OtherPostulations />
                </Grid>
            </Grid>
        </Container>
    );
};
