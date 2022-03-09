import axiosClient from '../axiosClient';

export const rescheduleInterview = ({ id, date }) => {
    const data = {
        id,
        new_date: date,
    };

    return axiosClient.patch(`/interviews/${id}/reschedule`, data);
};
