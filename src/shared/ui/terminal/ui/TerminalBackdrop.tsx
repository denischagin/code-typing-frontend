import { Flex, FlexProps } from "@chakra-ui/react"

import { motion } from "framer-motion"

export const TerminalBackdrop = (props: FlexProps) => {
    return (
        <Flex
            as={motion.div}
            justify="center"
            align="center"
            bg="contrast.300"
            h="100vh"
            w="100vw"
            position="fixed"
            top="0"
            left="0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transitionDuration="0.1s"
            transitionTimingFunction="ease-out"
            {...props}
        />
    )
}
