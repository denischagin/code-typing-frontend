import { Flex, TabPanel } from "@chakra-ui/react"

import { useUnit } from "effector-react"

import { ThemeItem } from "@entities/theme"
import { $currentTheme, themes, useChangeTheme } from "@features/settings/theme"

export const ChangeThemeTabPanel = () => {
    const currentTheme = useUnit($currentTheme)
    const { changeTheme } = useChangeTheme()

    return (
        <TabPanel>
            <Flex gap={2} mt={5} alignItems={"center"} wrap="wrap">
                {themes.map(theme => (
                    <ThemeItem
                        key={theme.id}
                        width="200px"
                        onChangeTheme={changeTheme}
                        currentTheme={currentTheme}
                        theme={theme}
                    />
                ))}
            </Flex>
        </TabPanel>
    )
}
