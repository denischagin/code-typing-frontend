import { queryKeysEnum } from "@shared/constants"
import { GithubUserService } from "@shared/ui/github"
import { useQuery } from "@tanstack/react-query"

export const useGetGithubUser = (username: string) => {
    return useQuery({
        queryKey: [queryKeysEnum.githubUser, username],
        queryFn: () => GithubUserService.getUserByUsername(username)
    })
}
