import axios from 'axios';

export const getInterviews = async () => {
    const {
        data: { data },
    } = await axios.get('https://gethiredplatzi.herokuapp.com/api/v1/interviews');
    return data;
};
