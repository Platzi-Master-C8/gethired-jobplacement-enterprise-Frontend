import axiosClient from '../axiosClient';

export const getVacancy = (id) => {
    return axiosClient.get(`/vacancies/${id}`);
};

export const updateVacancy = (id, data) => {
    return axiosClient.put(`/vacancies/${id}`, data);
};