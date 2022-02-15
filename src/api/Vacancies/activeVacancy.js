import axiosClient from '../axiosClient';

export const activeVacancy = (id) => {
    return axiosClient.patch(`/vacancies-status-active/${id}`);
};