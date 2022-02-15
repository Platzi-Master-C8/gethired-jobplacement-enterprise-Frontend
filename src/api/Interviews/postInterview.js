import axiosClient from '../axiosClient';

export const postNewVacancy = (data) => {
    return axiosClient.post('/api/v1/interviews', data);
};
