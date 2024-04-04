import { makeBaseQuery } from "@shared/api/make-base-query"
import axios from "axios"

export const githubInstance = axios.create({
    baseURL: "https://api.github.com/"
})

export const baseQueryGithub = makeBaseQuery(githubInstance)
