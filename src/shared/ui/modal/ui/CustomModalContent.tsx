import { Flex, FlexProps } from "@chakra-ui/react"

import { motion } from "framer-motion"

export const CustomModalContent = (props: FlexProps) => {
    const { children, ...restProps } = props

    return (
        <Flex
            as={motion.div}
            direction="column"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            maxW="80%"
            w="100%"
            h="80%"
            p="20px"
            bg="contrast.800"
            borderRadius="10px"
            zIndex={400}
            {...restProps}
        >
            {children}
        </Flex>
    )
}
