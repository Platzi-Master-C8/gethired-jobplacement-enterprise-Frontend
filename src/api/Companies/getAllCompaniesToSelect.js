import axiosClient from '../axiosClient';

export default function getAllCompaniesToSelect() {
    return axiosClient
        .get('/companies/select')
        .then((res) => res.data)
        .catch((err) => err);
}
