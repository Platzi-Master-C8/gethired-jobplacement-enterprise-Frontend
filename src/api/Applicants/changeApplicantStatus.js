import axiosSecondClient from '../axiosSecondClient';

export const changeApplicantStatus = async ({ id, statusId }) => {
    const { data } = await axiosSecondClient.patch(`/applicants/${id}/postulation-status/${statusId}`);
    return data;
};