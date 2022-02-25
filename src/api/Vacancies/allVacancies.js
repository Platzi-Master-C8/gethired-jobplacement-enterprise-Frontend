import axiosClient from '../axiosClient';

export const getAllVacancy = () => {
    return axiosClient.get('/vacancies');
};