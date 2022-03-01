import axios from 'axios';

export default async function getApplicantByVacancy(id) {
    try {
        const response = await axios.get(`https://18.190.40.7/api/v1/vacancies/${id}/applicants`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}
