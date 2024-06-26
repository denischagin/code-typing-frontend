import { Flex, Image, Link, Text } from "@chakra-ui/react"

import { GithubUserSkeleton, useGetGithubUser } from "@shared/ui/github"
import { GithubUserItemProps } from "@shared/ui/github/types"
import { motion } from "framer-motion"

export const GithubUserItem = (props: GithubUserItemProps) => {
    const { username } = props
    const { data: user, isSuccess, isLoading } = useGetGithubUser(username)

    if (isLoading) return <GithubUserSkeleton />

    return (
        isSuccess && (
            <Flex gap={2} maxW="300px" w="100%">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <Image h="100px" w="100px" borderRadius="50%" src={user.avatar_url} />
                </motion.div>
                <Flex flexDirection="column">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    >
                        <Link href={user?.html_url} variant="primary200" target="_blank">
                            {user.login}
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    >
                        <Text color="main.500">{user?.bio}</Text>
                    </motion.div>
                </Flex>
            </Flex>
        )
    )
}
