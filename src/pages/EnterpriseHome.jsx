import React from 'react';
import { Container, Grid } from '@mui/material';

import { MainStatCard } from '../components/MainStatCard';
import { MainScheduler } from '../components/MainScheduler';

import { NewApplicants } from '../components/NewApplicants';

import { NewVacancies } from '../components/NewVacancies';

const fakeStats = [
    {
        id: 1,
        stat: 20,
        title: 'Open vacancies',
    },
    {
        id: 2,
        stat: 10,
        title: 'Closed vacancies',
    },
    {
        id: 3,
        stat: 150,
        title: 'Postulations',
    },
    {
        id: 4,
        stat: 56,
        title: 'New interviews',
    },
];

export const EnterpriseHome = () => {
    return (
        <Container sx={{ pt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="flex-end" spacing={4}>
                        {fakeStats.map(({ id, stat, title }) => (
                            <Grid item xs={6} sm={3} md={2} key={id}>
                                <MainStatCard stat={stat} title={title} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sx={{ py: 2 }}>
                    <MainScheduler />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <NewApplicants />
                </Grid>
                <Grid item xs={12} md={6}>
                    <NewVacancies />
                </Grid>
            </Grid>
        </Container>
    );
};
