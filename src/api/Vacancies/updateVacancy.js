import axiosClient from '../axiosClient';

export default function updateVacancy(id, data) {
    return axiosClient.put(`/vacancies/${id}`, data);
}
