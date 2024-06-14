import { useMemo } from "react"

import { useGenerateFontList } from "./useGenerateFontList"
import { useGenerateLanguageList } from "./useGenerateLanguageList"
import { useGenerateNavigationList } from "./useGenerateNavigationList"
import { useGenerateTerminalItem } from "./useGenerateTerminalItem"
import { useGenerateThemeList } from "./useGenerateThemeList"
import { useGenerateTimerModeList } from "./useGenerateTimerModeList"
import { useTypingCodeHandlers } from "@entities/code"
import { RecursiveListItemType } from "@shared/types"

export const useGenerateHelpList = (
    onClose: () => void,
    isTypingCodePage: boolean
): RecursiveListItemType[] => {
    const languageList = useGenerateLanguageList()
    const timerModeList = useGenerateTimerModeList()
    const themeList = useGenerateThemeList()
    const fontList = useGenerateFontList()
    const navigationList = useGenerateNavigationList()
    const terminalItem = useGenerateTerminalItem(onClose)

    const { handleNewText, resetTyping } = useTypingCodeHandlers()

    const helpTabs = useMemo(() => {
        return [
            ...(isTypingCodePage
                ? [
                      {
                          name: "Language",
                          children: languageList
                      },
                      {
                          name: "Timer mode",
                          children: timerModeList
                      },
                      {
                          name: "New code",
                          action: () => {
                              handleNewText()
                          }
                      },
                      {
                          name: "Repeat code",
                          action: () => {
                              resetTyping()
                          }
                      }
                  ]
                : []),
            {
                name: "Themes",
                children: themeList
            },
            {
                name: "Font",
                children: fontList
            },
            terminalItem,
            {
                name: "Navigation",
                children: navigationList
            }
        ]
    }, [languageList, timerModeList, themeList, fontList, terminalItem, isTypingCodePage])

    return helpTabs
}
