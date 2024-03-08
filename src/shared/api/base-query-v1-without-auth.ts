import axios from "axios";

export const baseQueryV1WithoutAuth = axios.create({
    baseURL: "http://localhost:8443/api/v1",
    withCredentials: true,
})
