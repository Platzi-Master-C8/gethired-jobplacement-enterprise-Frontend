import axiosClient from '../axiosClient';

export const inactiveVacancy = (id) => {
    return axiosClient.patch(`/vacancies-status-inactive/${id}`);
};