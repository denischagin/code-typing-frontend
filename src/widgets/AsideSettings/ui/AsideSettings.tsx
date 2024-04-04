import { useState } from "react"

import { Stack } from "@chakra-ui/react"

import { TerminalTab } from "@entities/terminal"
import { ChangeFontTab, ChangeFontTabPanel } from "@features/change-font"
import { CustomTextTab, CustomTextTabPanel } from "@features/custom-text"
import { LanguageTab, LanguageTabPanel } from "@features/select-language"
import { TypingModeTab, TypingModeTabPanel } from "@features/select-typing-mode"
import { ChangeThemeTab, ChangeThemeTabPanel } from "@features/theme"
import { Aside, AsideContent, AsideTab, AsideTabList, AsideTabPanels } from "@shared/ui/aside"
import { SettingsIcon } from "@shared/ui/icons"
import { motion } from "framer-motion"

export const AsideSettings = () => {
    const [currentTab, setCurrentTab] = useState<string | number | null>(null)
    const [isOpenSettings, setIsOpenSettings] = useState(false)

    const handleToggleSettings = () => {
        setIsOpenSettings(prev => !prev)
    }

    return (
        <Aside currentTabName={currentTab} onChangeTabName={setCurrentTab}>
            <AsideContent height="100%" overflow="hidden">
                <AsideTabList>
                    <Stack flexGrow="1">
                        <LanguageTab />
                        <CustomTextTab />
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
                    <CustomTextTabPanel />
                    <ChangeThemeTabPanel />
                    <ChangeFontTabPanel />
                </AsideTabPanels>
            </AsideContent>
        </Aside>
    )
}
