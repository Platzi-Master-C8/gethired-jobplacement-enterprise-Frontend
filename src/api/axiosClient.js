import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'https://gethired-enterprise.herokuapp.com';
axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
};

export default axiosClient;
