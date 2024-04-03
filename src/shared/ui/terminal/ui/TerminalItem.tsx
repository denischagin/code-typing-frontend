import {forwardRef} from "react";

import {Flex, FlexProps, Text} from "@chakra-ui/react";

export const TerminalItem = forwardRef<HTMLDivElement, FlexProps>(({children, ...restProps}, ref) => {
    return (
        <Flex w="100%" {...restProps} ref={ref} wrap="wrap">
            <Text
                color="green.400"
                mr={4}
                minW="fit-content"
            >
                code-typing@desktop
                <Text as="span" color="white">:</Text>
                <Text as="span" color="blue.400">~/code-typing</Text>
                <Text as="span" color="white">$</Text>
            </Text>
            {children}
        </Flex>
    )
})