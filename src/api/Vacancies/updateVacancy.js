import axiosClient from '../axiosClient';

export default function updateVacancy({ id, ...data }) {
    const formatData = {
        name: data.name,
        company_id: data.company,
        typeWork: data['type-work'],
        job_location: data['job-location'],
        description: data.description,
        salary: data.salary,
        hours_per_week: data['hours-per-week'],
        minimum_experience: data['minimum-experience'],
        skills: data.skills.join(),
    };

    return axiosClient.put(`/vacancies/${id}`, formatData);
}
