import axiosClient from '../axiosClient';

export default function postNewVacancy(data) {
    return axiosClient.post('/vacancies', data);
}
