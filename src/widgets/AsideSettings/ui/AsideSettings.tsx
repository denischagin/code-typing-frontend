import {useState} from "react";

import {Divider} from "@chakra-ui/react";

import {CustomTextTab, CustomTextTabPanel} from "@features/custom-text";
import {LanguageTab, LanguageTabPanel} from "@features/select-language";
import {TypingModeTab, TypingModeTabPanel} from "@features/select-typing-mode";
import {ChangeThemeTab, ChangeThemeTabPanel} from "@features/theme";
import {Aside, AsideContent, AsideTabList, AsideTabPanels} from "@shared/ui/aside";

export const AsideSettings = () => {
    const [currentTab, setCurrentTab] =
        useState<string | number | null>(null)

    return (
        <Aside
            currentTabName={currentTab}
            onChangeTabName={setCurrentTab}
        >
            <AsideContent
                height="100%"
                overflow="hidden"
            >
                <AsideTabList>
                    <LanguageTab/>
                    <CustomTextTab/>

                    <Divider bg="main.300"/>

                    <TypingModeTab/>
                    <ChangeThemeTab/>
                </AsideTabList>

                <AsideTabPanels overflow="hidden" display="flex" flexGrow={1}>
                    <LanguageTabPanel/>
                    <TypingModeTabPanel/>
                    <CustomTextTabPanel/>
                    <ChangeThemeTabPanel/>
                </AsideTabPanels>
            </AsideContent>
        </Aside>
    )
}
