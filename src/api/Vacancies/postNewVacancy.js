import axiosClient from '../axiosClient';

export const postNewVacancy = (data) => {
    return axiosClient.post('/vacancies', data);
};
