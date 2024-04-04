import { baseQueryGithub } from "@shared/api/base-query-github.ts"
import { GithubRepository, GithubUser } from "@shared/ui/github/types"

class GithubService {
    public async getUserByUsername(username: string): Promise<GithubUser> {
        const response = await baseQueryGithub<GithubUser>(`users/${username}`)
        return response.data
    }

    public async getReposByOwnerAndRepoName(
        owner: string,
        repoName: string
    ): Promise<GithubRepository> {
        const response = await baseQueryGithub<GithubRepository>(`repos/${owner}/${repoName}`)
        return response.data
    }
}

export default new GithubService()
