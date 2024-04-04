import { queryKeysEnum } from "@shared/constants"
import { GithubService } from "@shared/ui/github"
import { useQuery } from "@tanstack/react-query"

export const useGetGithubUser = (username: string) => {
    return useQuery({
        queryKey: [queryKeysEnum.githubUser, username],
        queryFn: () => GithubService.getUserByUsername(username)
    })
}
