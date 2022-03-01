import axiosClient from '../axiosClient';

export const getVacancy = (id) => {
    return axiosClient.get(`/interviews/${id}`);
};

export const updateVacancy = (id, data) => {
    return axiosClient.put(`/interviews/${id}`, data);
};
