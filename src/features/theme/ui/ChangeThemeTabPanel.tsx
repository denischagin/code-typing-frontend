import { Flex } from "@chakra-ui/react"

import { useUnit } from "effector-react"

import { ThemeItem } from "@entities/theme"
import { $currentTheme, themes, useChangeTheme } from "@features/theme"
import { settingTabs } from "@shared/constants"
import { AsideButtons, AsideCloseButton, AsideTabPanel } from "@shared/ui/aside"

export const ChangeThemeTabPanel = () => {
    const currentTheme = useUnit($currentTheme)
    const { changeTheme } = useChangeTheme()

    return (
        <AsideTabPanel
            name={settingTabs.theme}
            overflow="hidden"
            display="flex"
            flexDirection="column"
        >
            <AsideButtons>
                <AsideCloseButton>—</AsideCloseButton>
            </AsideButtons>

            <Flex direction="column" gap={2} mt={5} alignItems={"center"} overflow="auto">
                {themes.map(theme => (
                    <ThemeItem
                        key={theme.id}
                        onChangeTheme={changeTheme}
                        currentTheme={currentTheme}
                        {...theme}
                    />
                ))}
            </Flex>
        </AsideTabPanel>
    )
}
