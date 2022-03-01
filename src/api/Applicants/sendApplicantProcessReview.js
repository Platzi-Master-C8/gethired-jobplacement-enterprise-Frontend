import axiosSecondClient from "../axiosSecondClient";

export default function sendApplicantProcessReview(companyId, data) {
    return axiosSecondClient.post(`companies/${companyId}/recruitment-process-evaluation`, data)
}