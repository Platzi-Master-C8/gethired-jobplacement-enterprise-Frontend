import axiosClient from '../axiosClient';

export const getAllInterviews = () => {
    return axiosClient
        .get('/interviews')
        .then((response) => response.data)
        .catch((error) => error);
};
