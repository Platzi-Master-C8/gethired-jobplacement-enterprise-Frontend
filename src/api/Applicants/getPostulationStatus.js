import axiosSecondClient from 'Api/axiosSecondClient';

export const getPostulationStatus = async () => {
    const data = await axiosSecondClient.get('/postulation-status');
    return data.data;
}