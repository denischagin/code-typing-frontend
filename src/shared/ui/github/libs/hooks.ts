import { queryKeysEnum } from "@shared/constants"
import { GithubService } from "@shared/ui/github"
import { useQuery } from "@tanstack/react-query"

export const useGetGithubUser = (username: string) => {
    return useQuery({
        queryKey: [queryKeysEnum.githubUser, username],
        queryFn: () => GithubService.getUserByUsername(username)
    })
}

export const useGetGithubRepo = (owner: string, repoName: string) => {
    return useQuery({
        queryKey: [queryKeysEnum.githubRepo, owner, repoName],
        queryFn: () => GithubService.getReposByOwnerAndRepoName(owner, repoName)
    })
}
