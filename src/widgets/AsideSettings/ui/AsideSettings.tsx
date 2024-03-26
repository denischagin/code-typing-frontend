import {useState} from "react";

import {LanguageTab, LanguageTabPanel} from "@features/select-language";
import {TypingModeTab, TypingModeTabPanel} from "@features/select-typing-mode";
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
                    <TypingModeTab />
                </AsideTabList>

                <AsideTabPanels overflow="hidden" display="flex" flexGrow={1}>
                    <LanguageTabPanel/>
                    <TypingModeTabPanel />
                </AsideTabPanels>
            </AsideContent>
        </Aside>
    )
}
