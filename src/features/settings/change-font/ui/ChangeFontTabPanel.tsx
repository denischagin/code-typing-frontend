import { ChangeEventHandler, useState } from "react"

import { Box, Flex, Stack, TabPanel, Text } from "@chakra-ui/react"

import { PrintingInput, PrintingRow } from "@entities/code"
import {
    FontSizeItem,
    useChangeFontFamily,
    useChangeFontSize,
    useCurrentFont
} from "@entities/font"
import { FontFamilies, typingFontSizes } from "@shared/constants"
import { Tile, TileText } from "@shared/ui/tile"

export const ChangeFontTabPanel = () => {
    const [exampleText, setExampleText] = useState("console")

    const handleChangeExampleText: ChangeEventHandler<HTMLInputElement> = e => {
        setExampleText(e.target.value)
    }

    const font = useCurrentFont()
    const changeFontSize = useChangeFontSize()

    const changeFontFamily = useChangeFontFamily()
    const handleChangeFont = (fontFamily: FontFamilies) => () => {
        changeFontFamily(fontFamily)
    }

    const exampleCodeMock = "console.log('hello')"

    return (
        <TabPanel>
            <Flex gap={10} mt={5} wrap="wrap">
                <Box flexGrow={1} flexBasis="200px">
                    <Text fontSize="xl" mt={7} mb={2}>
                        Font families
                    </Text>

                    <Stack spacing={3}>
                        {Object.entries(FontFamilies).map(([key, value]) => (
                            <Tile
                                key={key}
                                isActive={font.fontFamily === value}
                                onClick={handleChangeFont(value)}
                            >
                                <TileText fontFamily={value}>{key}</TileText>
                            </Tile>
                        ))}
                    </Stack>
                </Box>

                <Flex direction="column" flexGrow={1} flexBasis="200px">
                    <Box flexGrow={1}>
                        <Text fontSize="xl" mt={7} mb={2}>
                            Font sizes
                        </Text>

                        <Flex gap={10} wrap="wrap" justifyContent="start" alignItems="end">
                            {typingFontSizes.map(fontSize => (
                                <FontSizeItem
                                    key={fontSize.fontSize}
                                    isActive={font.typingFontSize === fontSize.fontSize}
                                    onChangeFontSize={changeFontSize}
                                    {...fontSize}
                                />
                            ))}
                        </Flex>
                    </Box>

                    <Box flexGrow={2}>
                        <Text fontSize="large" mt={10} mb={2}>
                            Example
                        </Text>

                        <PrintingRow
                            status={"active"}
                            index={1}
                            text={exampleCodeMock}
                            printingInput={
                                <PrintingInput
                                    isRightRow={exampleCodeMock.startsWith(exampleText)}
                                    value={exampleText}
                                    onChange={handleChangeExampleText}
                                    maxLength={exampleCodeMock.length}
                                />
                            }
                        />
                    </Box>
                </Flex>
            </Flex>
        </TabPanel>
    )
}
