import axiosClient from '../axiosClient';

export default async function getVacanciesByUser(userId) {
    try {
        const response = await axiosClient.get(`/vacancies?user_id=${userId}`);
        const { data } = response;
        const vacancies = data.data;

        return vacancies;
    } catch (error) {
        console.log(error);
    }
}
