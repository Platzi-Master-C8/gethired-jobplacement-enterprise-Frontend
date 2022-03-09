import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

import { CardApplicant } from 'Components/CardApplicantList/CardApplicant';
import { OfferDetails } from 'Components/OfferDetails/index';
import { RecruitmentProcess } from 'Components/RecruitmentProcess';
import { OtherPostulations } from 'Components/OtherPostulations';

const CandidateData = {
    id: 1,
    name: 'Javier',
    paternal_last_name: 'Amaya',
    job_title: 'Backend Developer',
    email: 'javier@amaya.com',
    cellphone: '573154654',
    city: 'Mérida',
    country: 'México',
    postulation_status: {
        name: 'applied',
        created_at: '2022-02-17T19:10:45',
        updated_at: '2022-02-17T19:10:45',
    },
    vacancy_id: 1,
};

const JobCardData = {
    id: 1,
    name: 'UX Design',
    user_id: '1',
    startDate: '1991-02-25 00:37:33',
    description:
        'Saepe explicabo aut odio earum hic qui optio et. Ab ea necessitatibus quia inventore ut et. Possimus labore blanditiis debitis enim perspiciatis sit sint illum. Libero et ratione voluptates dolorem quibusdam aut.',
    status: true,
    salary: 9085960,
    company_id: 1,
    typeWork: '2',
    job_location: '83005 Dayana Forks Apt. 953',
    skillsRaw: 'typescript,javascript,css',
    hoursWeek: 16,
    experience: 6,
    created_at: '2022-02-15T02:17:33.000000Z',
    updated_at: '2022-02-15T05:39:05.000000Z',
    company: {
        id: 1,
        name: 'Perry Hansen',
    },
};

export const PostulationDetail = () => {
    return (
        <Container sx={{ pt: 2 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h2" mb={2}>
                        Postulant
                    </Typography>
                    <Grid sx={{ mb: 3 }}>
                        <CardApplicant applicant={CandidateData} isStatus isInterview={false} isList={false} />
                    </Grid>
                    <Grid>
                        <Typography variant="h2" mb={2}>
                            Vacancy Details
                        </Typography>
                        <OfferDetails offerInfo={JobCardData} />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <RecruitmentProcess />
                    <OtherPostulations />
                </Grid>
            </Grid>
        </Container>
    );
};
