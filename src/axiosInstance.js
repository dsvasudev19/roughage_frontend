import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/v1/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials:true,
});