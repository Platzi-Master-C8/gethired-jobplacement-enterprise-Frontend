import axios from 'axios';

export const getJobs = async (params) => {
    const {
        data: { data },
    } = await axios.post('https://gethiredplatzi.herokuapp.com/api/v1/filter', null, { params });
    const statusActive = data?.filter((vacancy) => vacancy.status === true);
    return statusActive;
};
