import axios from "axios";
import { getCookie } from "@/lib/cookie-manager";

const httpClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

httpClient.interceptors.request.use((config) => {
    const token = getCookie('access_token')
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default httpClient;