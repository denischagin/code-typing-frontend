import axios, {AxiosRequestConfig} from "axios";

export const baseQueryInstance = axios.create({
    baseURL: "https://fakerapi.it/api/v1/",
})

export const baseQuery = <R>(config: AxiosRequestConfig | string) => {
    if (typeof config === "string")
        return baseQueryInstance<R>({
            url: config
        });
    return baseQueryInstance<R>(config);
}
