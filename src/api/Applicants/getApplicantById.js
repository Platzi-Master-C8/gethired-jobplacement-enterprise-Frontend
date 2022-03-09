import axiosSecondClient from '../axiosSecondClient';

export const getApplicantById = async (id) => {
    const data = await axiosSecondClient.get(`/applicants/${id}`);

    return data.data;
};
