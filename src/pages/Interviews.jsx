import React from 'react';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';

import { InterviewCard } from 'Components/InterviewCard';
import { CancelInterview } from 'Components/CancelInterviewModal';
import { RescheduleInterview } from 'Components/RescheduleInterviewModal';
import { InterviewNotification } from 'Components/InterviewNotificationModal';

import useModal from '../hooks/useModal';
import iconMessage from '../img/icon_message.svg';

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

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        id="search"
                        label="Search"
                        variant="filled"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <img src={iconMessage} alt="Icon Message" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item xs={12} md={3}>
                    <TextField
                        fullWidth
                        id="location"
                        label="Location"
                        variant="filled"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <img src={iconMessage} alt="Icon Message" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item xs={12} md={3}>
                    <TextField
                        fullWidth
                        id="date"
                        label="Date"
                        variant="filled"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <img src={iconMessage} alt="Icon Message" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ my: 2 }}>
                {fakeData.map(({ id, status, name, location, experience, applyingFor, typeTime }) => (
                    <Grid item xs={12} sm={6} lg={4} xl={3} key={id}>
                        <InterviewCard
                            id={id}
                            status={status}
                            name={name}
                            location={location}
                            experience={experience}
                            applyingFor={applyingFor}
                            typeTime={typeTime}
                            cancelModal={setCancelModal}
                            scheduleModal={setScheduleModal}
                            notificationModal={setNotificationModal}
                        />
                    </Grid>
                ))}
            </Grid>

            <CancelInterview isOpen={isOpenModalCancel} onClose={setCancelModal} />
            <RescheduleInterview isOpen={isOpenScheduleModal} onClose={setScheduleModal} />
            <InterviewNotification isOpen={isOpenNotificationModal} onClose={setNotificationModal} />
        </Container>
    );
};
