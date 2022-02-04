import React from 'react';
import { Container, Grid } from '@mui/material';

import { MainStatCard } from '../components/MainStatCard';
import { MainScheduler } from '../components/MainScheduler';

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

const currentDate = new Date();

const fakeMonthData = [
    {
        title: 'Vacation',
        startDate: new Date(2022, 0, 30),
        endDate: new Date(2022, 1, 5),
    },
    {
        title: 'Website Re-Design Plan',
        startDate: new Date(2022, 1, 23, 9, 30),
        endDate: new Date(2022, 1, 23, 11, 30),
    },
    {
        title: 'Book Flights to San Fran for Sales Trip',
        startDate: new Date(2022, 1, 23, 12, 0),
        endDate: new Date(2022, 1, 23, 13, 0),
    },
    {
        title: 'Install New Router in Dev Room',
        startDate: new Date(2022, 1, 23, 14, 30),
        endDate: new Date(2022, 1, 23, 15, 30),
    },
    {
        title: 'Approve Personal Computer Upgrade Plan',
        startDate: new Date(2022, 1, 24, 10, 0),
        endDate: new Date(2022, 1, 24, 11, 0),
    },
    {
        title: 'Final Budget Review',
        startDate: new Date(2022, 1, 24, 12, 0),
        endDate: new Date(2022, 1, 24, 13, 35),
    },
    {
        title: 'New Brochures',
        startDate: new Date(2022, 1, 24, 14, 30),
        endDate: new Date(2022, 1, 24, 15, 45),
    },
    {
        title: 'Install New Database',
        startDate: new Date(2022, 1, 25, 9, 45),
        endDate: new Date(2022, 1, 25, 11, 15),
    },
    {
        title: 'Approve New Online Marketing Strategy',
        startDate: new Date(2022, 1, 25, 12, 0),
        endDate: new Date(2022, 1, 25, 14, 0),
    },
    {
        title: 'Upgrade Personal Computers',
        startDate: new Date(2022, 1, 25, 15, 15),
        endDate: new Date(2022, 1, 25, 16, 30),
    },
    {
        title: 'Customer Workshop',
        startDate: new Date(2022, 1, 26, 11, 0),
        endDate: new Date(2022, 1, 26, 12, 0),
    },
    {
        title: 'Prepare 2015 Marketing Plan',
        startDate: new Date(2022, 1, 26, 11, 0),
        endDate: new Date(2022, 1, 26, 13, 30),
    },
    {
        title: 'Brochure Design Review',
        startDate: new Date(2022, 1, 26, 14, 0),
        endDate: new Date(2022, 1, 26, 15, 30),
    },
    {
        title: 'Create Icons for Website',
        startDate: new Date(2022, 1, 27, 10, 0),
        endDate: new Date(2022, 1, 27, 11, 30),
    },
    {
        title: 'Upgrade Server Hardware',
        startDate: new Date(2022, 1, 27, 14, 30),
        endDate: new Date(2022, 1, 27, 16, 0),
    },
    {
        title: 'Submit New Website Design',
        startDate: new Date(2022, 1, 27, 16, 30),
        endDate: new Date(2022, 1, 27, 18, 0),
    },
    {
        title: 'Launch New Website',
        startDate: new Date(2022, 1, 26, 12, 20),
        endDate: new Date(2022, 1, 26, 14, 0),
    },
    {
        title: 'Website Re-Design Plan',
        startDate: new Date(2022, 1, 16, 9, 30),
        endDate: new Date(2022, 1, 16, 15, 30),
    },
    {
        title: 'Book Flights to San Fran for Sales Trip',
        startDate: new Date(2022, 1, 16, 12, 0),
        endDate: new Date(2022, 1, 16, 13, 0),
    },
    {
        title: 'Install New Database',
        startDate: new Date(2022, 1, 17, 15, 45),
        endDate: new Date(2022, 1, 18, 12, 15),
    },
    {
        title: 'Approve New Online Marketing Strategy',
        startDate: new Date(2022, 1, 18, 12, 35),
        endDate: new Date(2022, 1, 18, 14, 15),
    },
    {
        title: 'Upgrade Personal Computers',
        startDate: new Date(2022, 1, 19, 15, 15),
        endDate: new Date(2022, 1, 20, 20, 30),
    },
    {
        title: 'Prepare 2015 Marketing Plan',
        startDate: new Date(2022, 1, 20, 20, 0),
        endDate: new Date(2022, 1, 20, 13, 30),
    },
    {
        title: 'Brochure Design Review',
        startDate: new Date(2022, 1, 20, 14, 10),
        endDate: new Date(2022, 1, 20, 15, 30),
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
                <Grid item xs={12} sx={{ pt: 2 }}>
                    <MainScheduler monthData={fakeMonthData} currentDate={currentDate} />
                </Grid>
            </Grid>
        </Container>
    );
};
