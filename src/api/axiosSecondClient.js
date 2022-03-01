import axios from "axios";

const axiosSecondClient = axios.create();

axiosSecondClient.defaults.baseURL = process.env.RATINGS_API;

axiosSecondClient.defaults.headers = {
    'Content-Type': 'application/json'
}

export default axiosSecondClient;