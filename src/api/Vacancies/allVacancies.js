import axios from 'axios';

export const getJobs = async () => {
    const {
        data: { data },
    } = await axios.get('https://gethiredplatzi.herokuapp.com/api/v1/vacancies');
    const statusActive = data?.filter((vacancy) => vacancy.status === true);
    return statusActive;
};
