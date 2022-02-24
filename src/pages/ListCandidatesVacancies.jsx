import React from 'react';

import { Container, Grid, Typography } from '@mui/material';

import { ApplicantComparison } from '../components/ApplicantComparison';
import { CardApplicantList } from '../components/CardApplicantList/CardApplicantList';
import { OfferDetails } from '../components/OfferDetails/index';
import { Filters } from '../components/Filters';
import { RecommendedApplicant } from '../components/RecomendedApplicant';
import { SuccessfulApplicant } from '../components/SuccessfulApplicant';

import '../style/listCandidatesVacancies.scss';

const JobCardData = {
    id: 1,
    name: 'UX Design',
    user_id: '1',
    startDate: '1991-02-25 00:37:33',
    description:
        'Saepe explicabo aut odio earum hic qui optio et. Ab ea necessitatibus quia inventore ut et. Possimus labore blanditiis debitis enim perspiciatis sit sint illum. Libero et ratione voluptates dolorem quibusdam aut.',
    status: true,
    salary: '9085960',
    company_id: 1,
    typeWork: '2',
    job_location: '83005 Dayana Forks Apt. 953',
    skills: 'typescript,javascript,css',
    hoursWeek: '16',
    experience: '6',
    created_at: '2022-02-15T02:17:33.000000Z',
    updated_at: '2022-02-15T05:39:05.000000Z',
    company: {
        id: 1,
        name: 'Perry Hansen',
    },
};

const CandidateData = {
    id: 1,
    name: 'John Doe',
    profile: 'Fullstack Developer',
    email: 'john@doe.com',
    phone: '5712345678500',
    location: {
        city: 'Bogota',
        country: 'Colombia',
    },
};

export const ListCandidatesVacancies = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ m: 'auto' }}>
                    <Filters />
                </Grid>
                <Grid item xs={3}>
                    <OfferDetails {...JobCardData} />
                </Grid>
                <Grid item xs={6}>
                    <ApplicantComparison />
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h2" mb={2}>
                        Applicant List
                    </Typography>
                    <CardApplicantList {...CandidateData} />
                    <CardApplicantList {...CandidateData} />
                    <CardApplicantList {...CandidateData} />
                    <CardApplicantList {...CandidateData} />
                </Grid>
                <Grid item xs={3.5}>
                    <SuccessfulApplicant />
                </Grid>
                <Grid item xs={4}>
                    <RecommendedApplicant />
                </Grid>
            </Grid>
        </Container>
    );
};
