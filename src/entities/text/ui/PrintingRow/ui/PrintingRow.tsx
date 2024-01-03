import {Box, Grid, GridItem, Text} from "@chakra-ui/react";
import {PrintingRowProps} from "@entities/text/ui/PrintingRow/ui/PrintingRow.interface.ts";
import {memo} from "react";

const PrintingRow = (props: PrintingRowProps) => {
    const {
        isActive,
        index,
        isPrinted,
        text,
        printingInput
    } = props

    console.log('render printing row')

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

            <GridItem
                overflowX="auto"
            >
                <Box
                    w="max-content"
                    pos="relative"
                >
                    {isActive && printingInput}
                    <Text
                        w="max-content"
                        fontSize={"25px"}
                        whiteSpace="pre"
                        color={isPrinted ? 'whiteAlpha.800' : "gray.500"}
                    >
                        {text + " "}
                    </Text>

                </Box>

            </GridItem>

        </Grid>
    )
}

export default memo(PrintingRow)