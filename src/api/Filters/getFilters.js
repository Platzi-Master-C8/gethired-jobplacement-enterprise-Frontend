import axiosClient from '../axiosClient';

export const getListCompanies = async () => {
    const data = await axiosClient.get('companies/select');
    return data.data.data;
};

export const getListTypeWork = async () => {
    const data = await axiosClient.get('types-work');
    return data.data.data;
};

export const getListLocations = async () => {
    const data = await axiosClient.get('vacancies-job-location');
    return data.data;
};
