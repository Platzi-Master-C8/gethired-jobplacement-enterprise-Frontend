import axiosSecondClient from '../axiosSecondClient';

export default async function getApplicantById (id) {
    try {
        const response  = await axiosSecondClient.get(`/applicants/${id}`);
        const postulant = response.data;

        return {
            id: postulant.id,
            name: postulant.name,
            lastName: postulant.paternal_last_name,
            job: postulant.job_title,
            email: postulant.email,
            cellPhone: postulant.cellphone,
            city: postulant.city,
            country: postulant.country,
            updatedDate: postulant.updated_at,
            statusId: postulant.postulation_status.id,
            statusName: postulant.postulation_status.name,
            vacancyId: postulant.vacancy_id
        }
    } catch (err) {
        console.log(err);
    }
}
