import axiosClient from '../axiosClient';

export const getVacancy = (id) => {
    return axiosClient.get(`/api/v1/interviews/${id}`);
};

export const updateVacancy = (id, data) => {
    return axiosClient.put(`/api/v1/interviews/${id}`, data);
};
