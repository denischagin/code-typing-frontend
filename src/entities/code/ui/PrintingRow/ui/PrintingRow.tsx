import {memo, useEffect, useRef} from "react";

import {Box, Grid, Text} from "@chakra-ui/react";

import {PrintingRowProps, usePrintingRowHorizontalScroll} from "@entities/code";

const PrintingRow = (props: PrintingRowProps) => {
    const {
        text,
        endIndent,
        printingInput,
        typingValue,
        status,
        textProps,
        textRowElement
    } = props

    const isActive = status === 'active'
    const isPrinted = status === "printed"

    const containerRef = useRef<HTMLDivElement>(null)
    const rowRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        rowRef.current?.scroll({
            left: 0,
            behavior: "smooth",
        })
    }, [isActive]);

    usePrintingRowHorizontalScroll({rowRef, text, typingValue})


    return (
        <Grid
            gap={4}
            bgColor={isActive ? 'whiteAlpha.100' : undefined}
            _hover={{
                bgColor: 'whiteAlpha.100'
            }}
            px={4}
            h="max-content"
            ref={containerRef}
        >

            <Box
                overflowX="auto"
                overflow="hidden"
                ref={rowRef}
                w="100%"
            >
                <Box
                    as='pre'
                    pos="relative"
                    zIndex={1000}
                    w="max-content"
                >
                    {isActive && printingInput}
                    {textRowElement !== undefined ? textRowElement : (
                        <Text
                            as='code'
                            w="max-content"
                            fontSize={"25px"}
                            whiteSpace="pre"
                            color={isPrinted ? 'whiteAlpha.800' : "gray.500"}
                            {...textProps}
                        >
                            {text + " ".repeat(endIndent ?? 0)}
                        </Text>
                    )}
                </Box>
            </Box>
        </Grid>
    )
}

export default memo(PrintingRow)