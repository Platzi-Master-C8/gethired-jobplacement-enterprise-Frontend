import axios from 'axios';

export const getApplicantById = async (id) => {
    const data = await axios.get(`https://18.190.40.7/api/v1/applicants/${id}`);

    return data.data;
};
