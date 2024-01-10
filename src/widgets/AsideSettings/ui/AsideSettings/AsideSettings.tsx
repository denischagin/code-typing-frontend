import { useState } from "react";
import { Aside, AsideContent, AsideTab, AsideTabList, AsideTabPanel, AsideTabPanels } from "@shared/ui/aside";
import { LanguageTab, LanguageTabPanel } from "@widgets/AsideSettings";

export const AsideSettings = () => {
    const [currentTabIndex, setCurrentTabIndex] =
        useState<number | null>(null)

    const handleClosePanel = () => {
        setCurrentTabIndex(null)
    }

    return (
        <Aside
            currentTabIndex={currentTabIndex}
            onChangeTabIndex={setCurrentTabIndex}
        >
            <AsideContent
                display="flex"
                flexDirection="column"
                flex="1"
                overflow="hidden"
            >
                <AsideTabList>
                    <AsideTab>
                        <LanguageTab handleClosePanel={handleClosePanel} />
                    </AsideTab>
                </AsideTabList>

                <AsideTabPanels overflow="hidden" display="flex">
                    <AsideTabPanel overflow="hidden" display="flex">
                        <LanguageTabPanel handleClosePanel={handleClosePanel} />
                    </AsideTabPanel>
                </AsideTabPanels>
            </AsideContent>
        </Aside>
    )
}
