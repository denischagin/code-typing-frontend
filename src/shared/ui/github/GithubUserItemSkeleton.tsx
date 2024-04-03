import { Flex, Skeleton } from "@chakra-ui/react"

export const GithubUserItemSkeleton = () => {
    return (
        <Flex gap={2} maxW="300px" w="100%">
            <Skeleton minH="100px" minW="100px" borderRadius="50%" flexGrow={1} />
            <Flex flexDirection="column" w="100%" gap={2}>
                <Skeleton h="20px" w="100%" borderRadius="10px" />
                <Skeleton h="20px" w="100%" borderRadius="10px" />
            </Flex>
        </Flex>
    )
}
