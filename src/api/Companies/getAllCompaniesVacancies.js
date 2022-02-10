import axiosClient from '../axiosClient';

export default function getAllCompaniesVacancies() {
    return axiosClient
        .get('/companies/vacancies')
        .then((res) => res.data)
        .catch((err) => err);
}
