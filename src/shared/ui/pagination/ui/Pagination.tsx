import { Flex, FlexProps } from "@chakra-ui/react"

export const Pagination = (props: FlexProps) => {
    return (
        <Flex justifyContent="center" {...props} overflow="hidden" gap={4} wrap="wrap" {...props} />
    )
}
