import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

import { CardApplicantList } from '../components/CardApplicantList/CardApplicantList';
import { OfferDetails } from '../components/OfferDetails/index';
import { RecruitmentProcess } from '../components/RecruitmentProcess';
import { OtherPostulations } from '../components/OtherPostulations';

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
    typeWork: '1',
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
                    <OfferDetails {...JobCardData} />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <RecruitmentProcess />
                    <OtherPostulations />
                </Grid>
            </Grid>
        </Container>
    );
};
