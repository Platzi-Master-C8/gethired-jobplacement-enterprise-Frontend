import axiosClient from '../axiosClient';

export default function getVacancyById(id) {
    return axiosClient.get(`/vacancies/${id}`);
}
