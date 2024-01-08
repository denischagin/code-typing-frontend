import {Box, Grid, GridItem, Text} from "@chakra-ui/react";
import {memo, useEffect, useRef} from "react";
import {PrintingRowProps} from "@entities/code";

const PrintingRow = (props: PrintingRowProps) => {
    const {
        index,
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

    useEffect(() => {
        const rowElement = rowRef.current
        const rowRect = rowElement?.getBoundingClientRect()

        if (typingValue === null || typingValue === undefined || !rowRect || !rowElement) return

        const widthTypingValue = rowElement.scrollWidth / text.length * typingValue.length

        requestAnimationFrame(() => {
            if (widthTypingValue < rowElement.scrollLeft + 100) {
                rowElement.scroll({
                    left: widthTypingValue - rowRect.width / 2,
                    behavior: "smooth",
                })
            } else if (widthTypingValue + 200 > rowRect.width + rowElement.scrollLeft) {
                rowElement.scroll({
                    left: widthTypingValue - rowRect.width / 4,
                    behavior: "smooth",
                })
            }
        })
    }, [text.length, typingValue]);

    return (
        <Box zIndex={0}>
            <Grid
                templateColumns="80px 1fr"
                gap={4}
                bgColor={isActive ? 'whiteAlpha.100' : undefined}
                _hover={{
                    bgColor: 'whiteAlpha.100'
                }}
                px={4}
                h="max-content"
                ref={containerRef}
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

                <GridItem
                    overflowX="auto"
                    overflow="hidden"
                    ref={rowRef}
                    w="100%"
                >
                    <Box
                        pos="relative"
                        zIndex={1000}
                        w="max-content"
                    >
                        {isActive && printingInput}
                        {textRowElement !== undefined ? textRowElement : (
                            <Text
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

                </GridItem>

            </Grid>
        </Box>
    )
}

export default memo(PrintingRow)