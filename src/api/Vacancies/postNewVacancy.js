import axiosClient from '../axiosClient';

export default function postNewVacancy(data) {
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
        status: 1,
        user_id: data.user_id,
    };

    return axiosClient.post('/vacancies', formatData);
}
