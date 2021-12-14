import React from 'react';

import { Container, Typography, Box } from '@mui/material';

import { ApplicantComparison } from '../components/ApplicantComparison';
import { CardApplicantList } from '../components/CardApplicantList/CardApplicantList';
import { OfferDetails } from '../components/OfferDetails/index';
import { Filters } from '../components/Filters';
import { RecommendedApplicant } from '../components/RecomendedApplicant';
import { SuccessfulApplicant } from '../components/SuccessfulApplicant';

import '../style/listCandidatesVacancies.scss';

export const ListCandidatesVacancies = () => {
    return (
        <Container className="container-vacancies">
            <div className="filter">
                <Filters />
            </div>
            <Box
                sx={{
                    display: 'grid',
                    gridAutoFlow: 'row',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'repeat(2, 40%)',
                    gap: 8,
                }}
                className="wrapper"
            >
                <div>
                    <OfferDetails />
                </div>
                <div>
                    <ApplicantComparison />
                </div>
                <div sx={{ gridRow: '1 / 2' }}>
                    <Typography variant="h2" mb={2}>
                        Applicant List
                    </Typography>
                    <CardApplicantList />
                    <CardApplicantList />
                    <CardApplicantList />
                    <CardApplicantList />
                </div>
                <div>
                    <SuccessfulApplicant />
                </div>
                <div>
                    <RecommendedApplicant />
                </div>
            </Box>
        </Container>
    );
};
