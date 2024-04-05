import { useState } from "react"

import { Flex, Image, Link } from "@chakra-ui/react"

import githubIcon from "@shared/assets/github.svg"
import { GithubRepoSkeleton, useGetGithubRepo } from "@shared/ui/github"
import { GithubRepoItemProps } from "@shared/ui/github/types"

export const GithubRepoItem = (props: GithubRepoItemProps) => {
    const { owner, repo: repoName } = props
    const [isHover, setIsHover] = useState(false)

    const { data: repo, isLoading } = useGetGithubRepo(owner, repoName)

    const handleHover = () => {
        setIsHover(true)
    }

    const handleHoverOut = () => {
        setIsHover(false)
    }

    if (isLoading) return <GithubRepoSkeleton />

    const iconWidth = "1.2em"

    return (
        <Flex
            display="inline-flex"
            alignItems="center"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
        >
            <Image
                p="1px"
                bg={"white"}
                h={iconWidth}
                borderRadius="50%"
                w={iconWidth}
                src={githubIcon}
                alt="github icon"
                opacity={isHover ? 1 : 0}
                transition="all 200ms"
                ml={isHover ? "5px" : "-" + iconWidth}
            />

            <Link
                as="a"
                color="primary.400"
                _hover={{}}
                href={repo?.html_url}
                target="_blank"
                px={2}
                py={1}
                fontWeight="bold"
                textAlign="center"
                transition="all 200ms"
            >
                {repo?.name}
            </Link>
        </Flex>
    )
}
