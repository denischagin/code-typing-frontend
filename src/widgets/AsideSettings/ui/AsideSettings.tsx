import { useEffect, useState } from "react"

import { Stack } from "@chakra-ui/react"

import { TerminalTab } from "@entities/terminal"
import { useViewer } from "@entities/viewer"
import { ChangeFontTab, ChangeFontTabPanel } from "@features/change-font"
import { CustomTextTab, CustomTextTabPanel } from "@features/custom-text"
import { LanguageTab, LanguageTabPanel } from "@features/select-language"
import { TypingModeTab, TypingModeTabPanel } from "@features/select-typing-mode"
import { ChangeThemeTab, ChangeThemeTabPanel } from "@features/theme"
import { settingTabs } from "@shared/constants"
import { keyboardShortcuts } from "@shared/libs"
import { Aside, AsideContent, AsideTab, AsideTabList, AsideTabPanels } from "@shared/ui/aside"
import { SettingsIcon } from "@shared/ui/icons"
import { motion } from "framer-motion"

export const AsideSettings = () => {
    const [currentTab, setCurrentTab] = useState<string | number | null>(null)
    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const { isAuthenticated } = useViewer()

    const handleToggleSettings = () => {
        setIsOpenSettings(prev => !prev)
    }

    const handleChangeCurrentTab = (tab: string | number) => {
        setCurrentTab(prev => {
            console.log(prev, tab)
            return prev === tab ? null : tab
        })
    }

    const handleChangeCurrentTabSettings = (tab: string | number) => {
        setIsOpenSettings(true)
        handleChangeCurrentTab(tab)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            keyboardShortcuts({
                "Alt+1": () => handleChangeCurrentTab(settingTabs.language),
                "Ctrl+Shift+E": () => handleChangeCurrentTab(settingTabs.language),
                "Alt+2": () => isAuthenticated && handleChangeCurrentTab(settingTabs.customText),
                "Alt+3": () => handleChangeCurrentTabSettings(settingTabs.typingMode),
                "Alt+4": () => handleChangeCurrentTabSettings(settingTabs.theme),
                "Alt+5": () => handleChangeCurrentTabSettings(settingTabs.font)
            })(e)
        }
        document.addEventListener("keydown", handleKeyDown)

        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [])

    return (
        <Aside currentTabName={currentTab} onChangeTabName={setCurrentTab}>
            <AsideContent height="100%" overflow="hidden">
                <AsideTabList>
                    <Stack flexGrow="1">
                        <LanguageTab />
                        {isAuthenticated && <CustomTextTab />}
                    </Stack>

                    <motion.div
                        animate={isOpenSettings ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    >
                        <Stack>
                            <TypingModeTab />
                            <ChangeThemeTab />
                            <ChangeFontTab />
                        </Stack>
                    </motion.div>

                    <AsideTab mt={7} onClick={handleToggleSettings}>
                        <SettingsIcon />
                    </AsideTab>

                    <TerminalTab />
                </AsideTabList>

                <AsideTabPanels overflow="hidden" display="flex" flexGrow={1}>
                    <LanguageTabPanel />
                    <TypingModeTabPanel />
                    {isAuthenticated && <CustomTextTabPanel />}
                    <ChangeThemeTabPanel />
                    <ChangeFontTabPanel />
                </AsideTabPanels>
            </AsideContent>
        </Aside>
    )
}
