import axios from 'axios';

export const getStateVacancy = async ({ code, lastName }) => {
    const { data } = await axios.get(`https://18.190.40.7/api/v1/applicants/${code}/${lastName}/applicant-review`);
    return data;
};
