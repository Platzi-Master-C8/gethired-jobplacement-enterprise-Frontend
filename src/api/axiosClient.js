import axios from 'axios';

const axiosClient = axios.create();

<<<<<<< HEAD
axiosClient.defaults.baseURL = 'https://gethiredplatzi.herokuapp.com';
=======
axiosClient.defaults.baseURL = process.env.API;

>>>>>>> 7c997bf7e89cb1ea69460b14a340fa242daa48f1
axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
};

export default axiosClient;
