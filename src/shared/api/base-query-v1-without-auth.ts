import { makeBaseQuery } from "@shared/api/make-base-query"
import axios from "axios"

export const baseQueryV1InstanceWithOutAuth = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

export const baseQueryV1WithoutAuth = makeBaseQuery(baseQueryV1InstanceWithOutAuth)
