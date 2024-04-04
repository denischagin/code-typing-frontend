import { Flex } from "@chakra-ui/react"

import { GithubRepoItem } from "@shared/ui/github"
import { GithubRepoItemProps } from "@shared/ui/github/types"
import { motion } from "framer-motion"

export const Repos = () => {
    const reposLinks: GithubRepoItemProps[] = [
        { owner: "denischagin", repo: "code-typing" },
        { owner: "ttodoshi", repo: "code-typing-backend" }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                ease: "easeOut"
            }}
        >
            <Flex gap={2}>
                {reposLinks.map(props => (
                    <GithubRepoItem {...props} />
                ))}
            </Flex>
        </motion.div>
    )
}
