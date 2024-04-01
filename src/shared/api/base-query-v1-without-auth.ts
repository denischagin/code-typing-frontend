import axios from "axios";

export const baseQueryV1WithoutAuth = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})
