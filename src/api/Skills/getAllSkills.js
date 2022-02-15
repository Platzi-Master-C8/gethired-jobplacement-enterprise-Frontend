import axiosClient from '../axiosClient';

export default function getAllSkills() {
    return axiosClient
        .get('/skills')
        .then((res) => res.data)
        .catch((err) => err);
}
