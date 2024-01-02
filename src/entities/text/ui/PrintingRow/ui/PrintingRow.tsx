import {Grid, GridItem, Input, Text} from "@chakra-ui/react";
import {PrintingRowProps} from "@entities/text/ui/PrintingRow/ui/PrintingRow.interface.ts";
import {KeyboardEventHandler, useEffect, useState} from "react";

export const PrintingRow = (props: PrintingRowProps) => {
    const {
        isActive,
        isPrinted,
        onNextRow,
        index,
        text,
        indent,
    } = props

    const [typingValue, setTypingValue] = useState("")
    const isRightRow = text.startsWith(typingValue)

    const fontSize = "25px"

    useEffect(() => {
        setTypingValue(" ".repeat(indent))
    }, [indent]);

    const handleKeyDown: KeyboardEventHandler<HTMLParagraphElement> = (e) => {
        if (e.key === 'Enter' && text === typingValue.trimEnd()) {
            setTypingValue('')
            onNextRow()
        }
        if (e.key === 'Tab') {
            e.preventDefault()
            setTypingValue(prev => prev + " ".repeat(2))
        }

    }

    return (
        <Grid
            templateColumns="80px 1fr"
            gap={4}
            bgColor={isActive ? 'whiteAlpha.100' : undefined}
            _hover={{
                bgColor: 'whiteAlpha.100'
            }}
            px={4}
            h="max-content"
        >
            <GridItem
                display="flex"
                borderRight="2px solid"
                borderColor="whiteAlpha.200"
                alignItems="center"
            >
                <Text
                    color={isActive ? 'white' : "whiteAlpha.300"}
                    fontWeight="bold"
                    fontSize="20px"
                >
                    {index + 1}
                </Text>
            </GridItem>

            <GridItem pos="relative">
                {isActive && (
                    <Input
                        fontFamily="monospace"
                        tabIndex={10}
                        fontSize={fontSize}
                        pos="absolute"
                        color={isRightRow ? "white" : 'red.400'}
                        opacity={isRightRow ? "1" : "0.8"}
                        autoFocus
                        variant="unstyled"
                        onKeyDown={handleKeyDown}
                        value={typingValue}
                        onChange={(e) => setTypingValue(e.target.value)}
                    />
                )}

                <Text
                    fontFamily="monospace"
                    fontSize={fontSize}
                    whiteSpace="pre"
                    color={isPrinted ? 'whiteAlpha.800' : "gray.500"}
                >
                    {text}
                </Text>
            </GridItem>

        </Grid>
    )
}