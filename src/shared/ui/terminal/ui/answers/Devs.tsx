import {Flex} from "@chakra-ui/react";

import {GithubUserItem} from "@shared/ui/github";

export const Devs = () => {
    return (
        <Flex gap={10} wrap="wrap">
            <GithubUserItem username="denischagin"/>
            <GithubUserItem username="ttodoshi"/>
        </Flex>
    )
}