import { makeBaseQuery } from "@shared/api"
import axios from "axios"

export const githubInstance = axios.create({
    baseURL: "https://api.github.com/"
})

export const baseQueryGithub = makeBaseQuery(githubInstance)
