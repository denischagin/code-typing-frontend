import axios, { AxiosRequestConfig } from "axios"

export const fakerApiInstance = axios.create({
    baseURL: "https://fakerapi.it/api/v1/"
})

export const fakerApiBaseQuery = <R>(config: AxiosRequestConfig | string) => {
    if (typeof config === "string")
        return fakerApiInstance<R>({
            url: config
        })
    return fakerApiInstance<R>(config)
}
