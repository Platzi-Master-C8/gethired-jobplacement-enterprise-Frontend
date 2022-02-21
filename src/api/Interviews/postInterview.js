import axiosClient from '../axiosClient';

export const postNewInterview = (data) => {
    return axiosClient.post('/interviews', data);
};
