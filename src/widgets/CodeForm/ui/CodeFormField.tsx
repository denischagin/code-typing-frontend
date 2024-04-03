import { Flex, Input, InputProps, Text } from "@chakra-ui/react"

import { CodeRow } from "@entities/code"

export const CodeFormField = (props: InputProps) => {
    return (
        <>
            <CodeRow>
                <Flex gap={2} alignItems="center" width="100%">
                    <Text fontSize="25px" color="main.800" variant="unstyled">
                        {`>>`}
                    </Text>

                    <Input
                        fontSize="25px"
                        color="main.800"
                        variant="unstyled"
                        autoFocus
                        {...props}
                    />
                </Flex>
            </CodeRow>
            <CodeRow></CodeRow>
        </>
    )
}
