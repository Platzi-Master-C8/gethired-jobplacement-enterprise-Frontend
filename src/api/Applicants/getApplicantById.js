import axiosSecondClient from '../axiosSecondClient';

export default async function getApplicantById (id) {
    try {
        const response  = await axiosSecondClient.get(`/applicants/${id}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}