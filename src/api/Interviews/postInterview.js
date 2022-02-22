import axiosClient from '../axiosClient';

export const postNewInterview = (data) => {
    const formatData = {
        date: data.date,
        user_id: data.user_id,
        vacancy_id: 1,
        applicant_id: 1,
        platform: data.platform,
        url: data.direction,
        type: data.interviewType,
        active: 1,
        status_finished: '',
        notes: data.notes,
    };

    return axiosClient.post('/interviews', formatData);
};
