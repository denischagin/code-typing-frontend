import { Skeleton, Stack } from "@chakra-ui/react"

export const ResultListSkeleton = () => {
    return (
        <Stack spacing={5}>
            {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton w="100%" h="2.5em" borderRadius="md" key={index} />
            ))}
        </Stack>
    )
}
