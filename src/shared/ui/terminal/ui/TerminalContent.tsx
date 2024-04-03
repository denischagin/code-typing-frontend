import { Flex, FlexProps } from "@chakra-ui/react"

export const TerminalContent = (props: FlexProps) => {
    return (
        <Flex
            direction="column"
            maxW="80%"
            w="100%"
            h="80%"
            p="20px"
            bg="contrast.800"
            borderRadius="10px"
            zIndex={400}
            {...props}
        />
    )
}
