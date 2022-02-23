import axiosClient from '../axiosClient';

export default function getAllTypesOfWork() {
    return axiosClient
        .get('/types-work')
        .then((res) => res.data)
        .catch((err) => err);
}
