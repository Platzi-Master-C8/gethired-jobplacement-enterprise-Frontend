import axiosClient from '../axiosClient';

export default function getAllCompanies() {
    return axiosClient
        .get('/companies')
        .then((res) => res.data)
        .catch((err) => err);
}
