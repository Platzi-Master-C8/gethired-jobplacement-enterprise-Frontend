import React from 'react';

import { Container, Typography, Box } from '@mui/material';

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
    postulationStatus: 'Applied',
};

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
                    <OfferDetails {...JobCardData} />
                </div>
                <div>
                    <ApplicantComparison />
                </div>
                <div sx={{ gridRow: '1 / 2' }}>
                    <Typography variant="h2" mb={2}>
                        Applicant List
                    </Typography>
                    <CardApplicantList {...CandidateData} />
                    <CardApplicantList {...CandidateData} />
                    <CardApplicantList {...CandidateData} />
                    <CardApplicantList {...CandidateData} />
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
