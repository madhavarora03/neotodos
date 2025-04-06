import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL ?? "http://localhost:9000/api",
});

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;