import { AxiosInstance, AxiosRequestConfig } from "axios"

export const makeBaseQuery =
    (instance: AxiosInstance) =>
    <R>(config: AxiosRequestConfig | string) => {
        if (typeof config === "string")
            return instance<R>({
                url: config
            })
        return instance<R>(config)
    }
