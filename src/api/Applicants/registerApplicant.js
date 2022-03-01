import axiosSecondClient from "../axiosSecondClient";

export default function registerApplicant(data) {
    return axiosSecondClient.post('applicants', data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

}