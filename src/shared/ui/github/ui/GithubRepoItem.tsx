import { Link } from "@chakra-ui/react"

import { GithubRepoSkeleton, useGetGithubRepo } from "@shared/ui/github"
import { GithubRepoItemProps } from "@shared/ui/github/types"

export const GithubRepoItem = (props: GithubRepoItemProps) => {
    const { owner, repo: repoName } = props

    const { data: repo, isLoading } = useGetGithubRepo(owner, repoName)

    if (isLoading) return <GithubRepoSkeleton />

    return (
        <Link
            as="a"
            color="primary.600"
            _hover={{ color: "white", bg: "primary.600" }}
            href={repo?.html_url}
            target="_blank"
            border="1px solid"
            borderColor="primary.600"
            borderRadius="30px"
            px={2}
            py={1}
            fontWeight="bold"
        >
            {repo?.name}
        </Link>
    )
}
