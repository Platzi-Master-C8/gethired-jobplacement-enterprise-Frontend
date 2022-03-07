import axiosClient from '../axiosClient';

export const cancelInterview = ({ id, reason }) => {
    const data = {
        id,
        description: reason,
    };

    return axiosClient.patch(`/interviews/${id}/cancel`, data);
};
