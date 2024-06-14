import { useEffect, useState } from "react"

import { Stack } from "@chakra-ui/react"

import { TerminalTab } from "@entities/terminal"
import { useViewer } from "@entities/viewer"
import { Settings } from "@features/settings"
import { CustomTextTab, CustomTextTabPanel } from "@features/settings/custom-text"
import { LanguageTab, LanguageTabPanel } from "@features/settings/select-language"
import { TypingModeTab, TypingModeTabPanel } from "@features/settings/select-typing-mode"
import { settingTabs } from "@shared/constants"
import { keyboardShortcuts } from "@shared/libs"
import { Aside, AsideContent, AsideTab, AsideTabList, AsideTabPanels } from "@shared/ui/aside"
import { SettingsIcon } from "@shared/ui/icons"

export const AsideSettings = () => {
    const [currentTab, setCurrentTab] = useState<string | number | null>(null)
    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const { isAuthenticated } = useViewer()

    const handleToggleSettings = () => {
        setIsOpenSettings(prev => !prev)
    }

    const handleCloseSettings = () => {
        setIsOpenSettings(false)
    }

    const handleChangeCurrentTab = (tab: string | number, e: KeyboardEvent) => {
        e.preventDefault()
        setCurrentTab(prev => {
            return prev === tab ? null : tab
        })
    }

    const handleOpenSettings = () => {
        setIsOpenSettings(true)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            keyboardShortcuts({
                "Alt+1": () => handleChangeCurrentTab(settingTabs.language, e),
                "Ctrl+Shift+E": () => handleChangeCurrentTab(settingTabs.language, e),
                "Alt+2": () => handleChangeCurrentTab(settingTabs.typingMode, e),
                "Alt+3": () => isAuthenticated && handleChangeCurrentTab(settingTabs.customText, e),
                "Ctrl+Shift+S": handleOpenSettings
            })(e)
        }
        document.addEventListener("keydown", handleKeyDown)

        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [])

    return (
        <>
            <Settings isOpen={isOpenSettings} onClose={handleCloseSettings} />
            <Aside currentTabName={currentTab} onChangeTabName={setCurrentTab}>
                <AsideContent height="100%" overflow="hidden">
                    <AsideTabList>
                        <Stack flexGrow="1">
                            <LanguageTab />
                            <TypingModeTab />
                            {isAuthenticated && <CustomTextTab />}
                        </Stack>

                        <AsideTab mt={7} onClick={handleToggleSettings}>
                            <SettingsIcon />
                        </AsideTab>

                        <TerminalTab />
                    </AsideTabList>

                    <AsideTabPanels overflow="hidden" display="flex" flexGrow={1}>
                        <LanguageTabPanel />
                        <TypingModeTabPanel />
                        {isAuthenticated && <CustomTextTabPanel />}
                    </AsideTabPanels>
                </AsideContent>
            </Aside>
        </>
    )
}
