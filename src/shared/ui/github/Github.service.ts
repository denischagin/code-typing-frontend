import { GithubUser } from "./Github.interface.ts"
import { baseQueryGithub } from "@shared/api/base-query-github.ts"

class GithubService {
    public async getUserByUsername(username: string): Promise<GithubUser> {
        const response = await baseQueryGithub<GithubUser>(`users/${username}`)
        return response.data
    }
}

export default new GithubService()
