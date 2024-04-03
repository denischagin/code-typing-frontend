import { Box, Button, Flex, Select, Stack, Tooltip } from "@chakra-ui/react"

import { defaultTexts, useGetProgrammingLanguages } from "@entities/code"
import { settingTabs } from "@shared/constants"
import { AsideButtons, AsideCloseButton, AsideTabPanel } from "@shared/ui/aside"
import { Tile, TileText } from "@shared/ui/tile"

export const CustomTextTabPanel = () => {
    const { data: languages } = useGetProgrammingLanguages()

    return (
        <AsideTabPanel name={settingTabs.customText}>
            <AsideButtons>
                <AsideCloseButton>—</AsideCloseButton>
            </AsideButtons>

            <Flex direction="column" gap={2} mt={5}>
                <Button>Add Text</Button>

                <Select>
                    <option value="default">--Language--</option>
                    {languages?.map(language => (
                        <option key={language.UUID} value={language.UUID}>
                            {language.name}
                        </option>
                    ))}
                </Select>

                <Stack mt={7}>
                    {defaultTexts.map(text => (
                        <Tooltip key={text} label={text}>
                            <Box>
                                <Tile _hover={{ bgColor: "primary.800" }}>
                                    <TileText>{text.trim().slice(0, 30)}...</TileText>
                                </Tile>
                            </Box>
                        </Tooltip>
                    ))}
                </Stack>
            </Flex>
        </AsideTabPanel>
    )
}
