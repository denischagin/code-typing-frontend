import { Flex, Stack, Text } from '@chakra-ui/react'

import { FontState, useChangeFont, useCurrentFont } from '@entities/font'
import { FontFamilies, settingTabs } from '@shared/constants'
import { AsideButtons, AsideCloseButton, AsideTabPanel } from '@shared/ui/aside'
import { Tile, TileText } from '@shared/ui/tile'

export const ChangeFontTabPanel = () => {
  const font = useCurrentFont()
  const changeFont = useChangeFont()

  const handleChangeFont = (font: FontState) => () => {
    changeFont(font)
  }

  return (
    <AsideTabPanel name={settingTabs.font}>
      <AsideButtons>
        <AsideCloseButton>—</AsideCloseButton>
      </AsideButtons>

      <Flex
        flexDirection="column"
        mt={7}
        gap={3}
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
        >
          Font families
        </Text>

        <Stack spacing={3}>
          {Object.entries(FontFamilies).map(([key, value]) => (
            <Tile
              key={key}
              isActive={font.fontFamily === value}
              onClick={handleChangeFont({ fontFamily: value })}
            >
              <TileText fontFamily={value}>{key}</TileText>
            </Tile>
          ))}
        </Stack>
      </Flex>
    </AsideTabPanel>
  )
}
