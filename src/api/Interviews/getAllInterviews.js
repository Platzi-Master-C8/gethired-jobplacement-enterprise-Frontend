import axiosClient from '../axiosClient';

export const getAllInterviews = async () => {
    const {
        data: { data },
    } = await axiosClient.get('/interviews');

    return data;
};
