/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';

import { CancelInterview } from 'Components/CancelInterviewModal';
import { RescheduleInterview } from 'Components/RescheduleInterviewModal';
import { InterviewNotification } from 'Components/InterviewNotificationModal';

import { cancelInterview } from 'Api/interviews/cancelInterview';
import { getAllInterviews } from 'Api/Interviews/getAllInterviews';

import useModal from 'Hooks/useModal';
import { InterviewsList } from './InterviewsList';

export const Interviews = () => {
    const [isOpenModalCancel, setCancelModal] = useModal();
    const [isOpenScheduleModal, setScheduleModal] = useModal();
    const [isOpenNotificationModal, setNotificationModal] = useModal();
    const [interviews, setInterviews] = useState([]);
    const [currentInterview, setCurrentInterview] = useState();

    useEffect(() => {
        getAllInterviews().then(({ data }) => setInterviews(data));
    }, []);

    const handleCancelInterview = (reason) => {
        cancelInterview({ id: currentInterview, reason });
    };

    return (
        <React.Fragment>
            <Grid container spacing={3} sx={{ my: 2 }}>
                <InterviewsList
                    interviews={interviews}
                    cancelModal={setCancelModal}
                    scheduleModal={setScheduleModal}
                    notificationModal={setNotificationModal}
                    setCurrentInterview={setCurrentInterview}
                />
            </Grid>

            <CancelInterview isOpen={isOpenModalCancel} onClose={setCancelModal} handleSubmit={handleCancelInterview} />
            <RescheduleInterview isOpen={isOpenScheduleModal} onClose={setScheduleModal} />
            <InterviewNotification isOpen={isOpenNotificationModal} onClose={setNotificationModal} />
        </React.Fragment>
    );
};
