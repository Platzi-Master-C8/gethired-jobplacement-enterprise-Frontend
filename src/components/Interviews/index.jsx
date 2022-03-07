import React, { useEffect, useState } from 'react';

import { CancelInterview } from 'Components/CancelInterviewModal';
import { RescheduleInterview } from 'Components/RescheduleInterviewModal';
import { InterviewNotification } from 'Components/InterviewNotificationModal';

import { cancelInterview } from 'Api/Interviews/cancelInterview';
import { getAllInterviews } from 'Api/Interviews/getAllInterviews';

import useModal from 'Hooks/useModal';
import { InterviewsList } from './InterviewsList';

export const Interviews = () => {
    const [isOpenModalCancel, setCancelModal] = useModal();
    const [isOpenScheduleModal, setScheduleModal] = useModal();
    const [isOpenNotificationModal, setNotificationModal] = useModal();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [interviews, setInterviews] = useState([]);
    const [currentInterview, setCurrentInterview] = useState();

    useEffect(() => {
        getAllInterviews()
            .then((data) => {
                setLoading(false);
                setInterviews(data.data);
            })
            .catch(() => {
                setLoading(false);
                setError('Error while loading interviews');
            });
    }, []);

    const handleCancelInterview = (reason) => {
        cancelInterview({ id: currentInterview, reason });
    };

    return (
        <React.Fragment>
            <InterviewsList
                isLoading={isLoading}
                error={error}
                interviews={interviews}
                cancelModal={setCancelModal}
                scheduleModal={setScheduleModal}
                notificationModal={setNotificationModal}
                setCurrentInterview={setCurrentInterview}
            />

            <CancelInterview isOpen={isOpenModalCancel} onClose={setCancelModal} handleSubmit={handleCancelInterview} />
            <RescheduleInterview isOpen={isOpenScheduleModal} onClose={setScheduleModal} />
            <InterviewNotification isOpen={isOpenNotificationModal} onClose={setNotificationModal} />
        </React.Fragment>
    );
};
