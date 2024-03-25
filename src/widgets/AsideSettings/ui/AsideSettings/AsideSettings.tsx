import {useState} from "react";

import {Aside, AsideContent, AsideTabList, AsideTabPanels} from "@shared/ui/aside";
import {LanguageTab, LanguageTabPanel} from "@widgets/AsideSettings";

export const AsideSettings = () => {
    const [currentTabIndex, setCurrentTabIndex] =
        useState<number | null>(null)

    return (
        <Aside
            currentTabIndex={currentTabIndex}
            onChangeTabIndex={setCurrentTabIndex}
        >
            <AsideContent
                height="100%"
                overflow="hidden"
            >
                <AsideTabList>
                    <LanguageTab/>
                </AsideTabList>

                <AsideTabPanels overflow="hidden" display="flex" flexGrow={1}>
                    <LanguageTabPanel/>
                </AsideTabPanels>
            </AsideContent>
        </Aside>
    )
}
