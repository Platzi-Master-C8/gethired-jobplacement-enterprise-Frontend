import React from 'react';

import { Grid, Typography } from '@mui/material';

import { ApplicantComparison } from '../components/ApplicantComparison';
import { CardApplicantList } from '../components/CardApplicantList/CardApplicantList';
import { OfferDetails } from '../components/OfferDetails/index';
import { Filters } from '../components/Filters';

import '../style/listCandidatesVacancies.scss';

export const ListCandidatesVacancies = () => {
    return (
        <div className="container-vacancies">
            <div className="filter">
                <Filters />
            </div>
            <Grid container spacing={2} className="wrapper">
                <Grid item xs={3}>
                    <OfferDetails />
                </Grid>
                <Grid item xs={6}>
                    <ApplicantComparison />
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h2" mb={2}>
                        Offer Details
                    </Typography>
                    <CardApplicantList />
                    <CardApplicantList />
                    <CardApplicantList />
                </Grid>
            </Grid>
        </div>
    );
};
