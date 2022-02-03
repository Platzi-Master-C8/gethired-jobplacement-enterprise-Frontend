import axios from 'axios';

export const getJobs = async () => {
    const {
        data: { data },
    } = await axios.get('https://gethiredplatzi.herokuapp.com/api/v1/companies/vacancies');
    const vacancies = data
        ?.map((element) => {
            let list = [];
            list = list.concat(element.vacancies);
            return list;
        })
        .flat();
    const statusActive = vacancies?.filter((vacancy) => vacancy.status === true);
    return statusActive;
};
