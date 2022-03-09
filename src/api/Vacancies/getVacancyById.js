import axiosClient from '../axiosClient';

export default async function getVacancyById(id) {
    try {
        const response = await axiosClient.get(`/vacancies/${id}`);
        const { data } = response;
        const vacancy = data.data;

        return {
            id: vacancy.id,
            name: vacancy.name,
            salary: vacancy.salary,
            description: vacancy.description,
            status: vacancy.status,
            company: vacancy.company_id,
            'type-work': vacancy.type_work_id,
            typeWork: vacancy.typeWork,
            'job-location': vacancy.job_location,
            skills: vacancy.skills,
            skillsRaw: vacancy.skills_raw,
            'hours-per-week': vacancy.hours_per_week,
            hoursWeek: vacancy.hours_per_week,
            'minimum-experience': vacancy.minimum_experience,
            experience: vacancy.minimum_experience,
        };
    } catch (error) {
        console.log(error);
    }
}
