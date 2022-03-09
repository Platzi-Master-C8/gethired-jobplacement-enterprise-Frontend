import axiosClient from '../axiosClient';

export const getInterviews = async () => {
    const {
        data: { data },
    } = await axiosClient.get('/interviews');
    return data;
};
