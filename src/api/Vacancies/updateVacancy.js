import axiosClient from '../axiosClient';

export const getVacancy = (id) => {
    return axiosClient.get(`/vacancies/${id}`);
};

export const updateVacancy = (id, data) => {
    return axiosClient.put(`/vacancies/${id}`, data);
};

export const getAllVacancy = () => {
    return axiosClient.get(`/vacancies`);
};

export const activeVacancy = (id) => {
    return axiosClient.patch(`/vacancies-status-active/${id}`);
};

export const inactiveVacancy = (id) => {
    return axiosClient.patch(`/vacancies-status-inactive/${id}`);
};
