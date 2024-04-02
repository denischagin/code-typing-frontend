import {Flex, FlexProps} from "@chakra-ui/react";

export const TerminalBackdrop = (props: FlexProps) => {
    return (
        <Flex
            justify="center"
            align="center"
            bg="contrast.300"
            h="100vh"
            w="100vw"
            position="fixed"
            top="0"
            left="0"
            {...props}
        />
    )
}