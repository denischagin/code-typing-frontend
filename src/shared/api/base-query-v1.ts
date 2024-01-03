import axios, {AxiosRequestConfig} from "axios";

export const baseQueryV1Instance = axios.create({
    baseURL: "http://localhost:8080",
})

export const baseQueryV1 = <R>(config: AxiosRequestConfig | string) => {
    if (typeof config === "string")
        return baseQueryV1Instance<R>({
            url: config
        });
    return baseQueryV1Instance<R>(config);
}
