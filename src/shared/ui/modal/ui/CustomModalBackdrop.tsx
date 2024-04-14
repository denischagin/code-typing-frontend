import { createPortal } from "react-dom"

import { Flex, FlexProps } from "@chakra-ui/react"

export const CustomModalBackdrop = (props: FlexProps) => {
    return createPortal(
        <Flex
            justify="center"
            align="center"
            bg="blackAlpha.300"
            h="100vh"
            w="100vw"
            position="fixed"
            top="0"
            left="0"
            {...props}
        />,
        document.body
    )
}
