import {Flex, Image, Link, Text} from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";

import {GithubUserItemProps, useGetGithubUser} from "@shared/ui/github";

export const GithubUserItem = (props: GithubUserItemProps) => {
    const { username } = props;
    const { data: user, isSuccess, isLoading } = useGetGithubUser(username);

    return (
        <Flex gap={2}>
            {isLoading ? (
                <Skeleton h="100px" w="100px" borderRadius="50%" />
            ) : (
                isSuccess && (
                    <>
                        <Image h="100px" w="100px" borderRadius="50%" src={user.avatar_url} />
                        <Flex flexDirection="column">
                            <Link href={user?.html_url} color="primary.200" _hover={{ color: 'primary.400' }}>{user.login}</Link>
                            <Text color="main.500">{user?.bio}</Text>
                        </Flex>
                    </>
                )
            )}
        </Flex>
    );
}
