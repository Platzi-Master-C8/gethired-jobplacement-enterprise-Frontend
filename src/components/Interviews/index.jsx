/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import { CancelInterview } from 'Components/CancelInterviewModal';
import { RescheduleInterview } from 'Components/RescheduleInterviewModal';
import { InterviewNotification } from 'Components/InterviewNotificationModal';

import { getAllInterviews } from 'Api/Interviews';
import useModal from 'Hooks/useModal';
import { InterviewsList } from './InterviewsList';

const fakeData = [
    {
        id: 1,
        status: 'In process',
        name: 'Diego Lozano',
        location: ' Bucaramanga, Santander',
        experience: '3 years',
        applyingFor: 'Backend',
        typeTime: 'Full time',
    },
    {
        id: 2,
        status: 'In process',
        name: 'Zajith Corro',
        location: 'Veracruz, México',
        experience: '3 years',
        applyingFor: 'Frontend',
        typeTime: 'Full time',
    },
    {
        id: 3,
        status: 'In process',
        name: 'Jimmy Anaya',
        location: 'Floridablanca, Santander',
        experience: '3 years',
        applyingFor: 'Backend',
        typeTime: 'Full time',
    },
    {
        id: 4,
        status: 'In process',
        name: 'Daniel Gonzalez',
        location: 'Bógota, Colombia',
        experience: '3 years',
        applyingFor: 'Frontend',
        typeTime: 'Full time',
    },
    {
        id: 5,
        status: 'In process',
        name: 'Fernando de Leon',
        location: 'Bógota, Colombia',
        experience: '3 years',
        applyingFor: 'Frontend',
        typeTime: 'Full time',
    },
    {
        id: 6,
        status: 'In process',
        name: 'Leonardo Espinoza',
        location: 'México',
        experience: '3 years',
        applyingFor: 'Frontend',
        typeTime: 'Full time',
    },
];

export const Interviews = () => {
    const [isOpenModalCancel, setCancelModal] = useModal();
    const [isOpenScheduleModal, setScheduleModal] = useModal();
    const [isOpenNotificationModal, setNotificationModal] = useModal();
    const [interviews, setInterviews] = useState([]);

    useEffect(() => {
        getAllInterviews().then(({ data }) => setInterviews(data));
    }, []);

    return (
        <React.Fragment>
            <Grid container sx={{ my: 3, display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} sm={12} md={8}>
                    <TextField
                        fullWidth
                        id="search"
                        label="Search"
                        variant="filled"
                        placeholder="Search by name or vacancy"
                    />
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ my: 2 }}>
                <InterviewsList
                    interviews={interviews}
                    cancelModal={setCancelModal}
                    scheduleModal={setScheduleModal}
                    notificationModal={setNotificationModal}
                />
            </Grid>

            <CancelInterview isOpen={isOpenModalCancel} onClose={setCancelModal} />
            <RescheduleInterview isOpen={isOpenScheduleModal} onClose={setScheduleModal} />
            <InterviewNotification isOpen={isOpenNotificationModal} onClose={setNotificationModal} />
        </React.Fragment>
    );
};
