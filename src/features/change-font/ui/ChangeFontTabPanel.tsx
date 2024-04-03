import { Flex, Stack, Text } from "@chakra-ui/react"

import {
    FontSizeItem,
    useChangeFontFamily,
    useChangeFontSize,
    useCurrentFont
} from "@entities/font"
import { FontFamilies, settingTabs, typingFontSizes } from "@shared/constants"
import { AsideButtons, AsideCloseButton, AsideTabPanel } from "@shared/ui/aside"
import { Tile, TileText } from "@shared/ui/tile"

export const ChangeFontTabPanel = () => {
    const font = useCurrentFont()
    const changeFontFamily = useChangeFontFamily()
    const changeFontSize = useChangeFontSize()

    const handleChangeFont = (fontFamily: FontFamilies) => () => {
        changeFontFamily(fontFamily)
    }

    return (
        <AsideTabPanel name={settingTabs.font}>
            <AsideButtons>
                <AsideCloseButton>—</AsideCloseButton>
            </AsideButtons>

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

            <Text fontSize="xl" mt={7} mb={2}>
                Font sizes
            </Text>

            <Flex gap={2} wrap="wrap" justifyContent="space-evenly" alignItems="end">
                {typingFontSizes.map(fontSize => (
                    <FontSizeItem
                        key={fontSize.fontSize}
                        isActive={font.typingFontSize === fontSize.fontSize}
                        onChangeFontSize={changeFontSize}
                        {...fontSize}
                    />
                ))}
            </Flex>
        </AsideTabPanel>
    )
}
