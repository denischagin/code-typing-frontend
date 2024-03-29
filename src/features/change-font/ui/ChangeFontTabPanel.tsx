import {Flex, Stack, Text} from '@chakra-ui/react'

import {useChangeFontFamily, useChangeFontSize, useCurrentFont} from '@entities/font'
import {FontFamilies, settingTabs, typingFontSizes} from '@shared/constants'
import {AsideButtons, AsideCloseButton, AsideTabPanel} from '@shared/ui/aside'
import {Tile, TileText} from '@shared/ui/tile'

export const ChangeFontTabPanel = () => {
    const font = useCurrentFont()
    const changeFontFamily = useChangeFontFamily()
    const changeFontSize = useChangeFontSize()


    const handleChangeFont = (fontFamily: FontFamilies) => () => {
        changeFontFamily(fontFamily)
    }

    const handleChangeFontSize = (fontSize: number) => () => {
        changeFontSize(fontSize)
    };
    return (
        <AsideTabPanel name={settingTabs.font}>
            <AsideButtons>
                <AsideCloseButton>—</AsideCloseButton>
            </AsideButtons>

            <Text
                fontSize="xl"
                fontWeight="bold"
                mt={7}
                mb={2}
            >
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


            <Text
                fontSize="xl"
                fontWeight="bold"
                mt={7}
                mb={2}
            >
                Font sizes (px)
            </Text>

            <Flex gap={2} wrap="wrap" justifyContent="space-evenly" alignItems="center">
                {typingFontSizes.map((fontSize) => (
                    <Tile
                        key={fontSize}
                        onClick={handleChangeFontSize(fontSize)}
                        isActive={font.typingFontSize === fontSize}
                        py={1}
                    >
                        <Text fontSize={fontSize}>{fontSize}</Text>
                    </Tile>
                ))}
            </Flex>
        </AsideTabPanel>
    )
}
