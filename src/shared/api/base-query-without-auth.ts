import axios from "axios";

export const baseQueryWithoutAuth = axios.create({
    baseURL: "http://localhost:8443/api/v1",
    withCredentials: true,
})
