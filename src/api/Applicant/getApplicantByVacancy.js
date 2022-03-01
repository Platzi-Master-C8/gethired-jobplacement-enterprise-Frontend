import axiosSecondClient from '../axiosSecondClient';

export default async function getApplicantByVacancy(id) {
    try {
        const response = await axiosSecondClient.get(`/vacancies/${id}/applicants`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}
