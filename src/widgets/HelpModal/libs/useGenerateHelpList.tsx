import { useMemo } from "react"

import { useNavigate } from "react-router-dom"

import { useGenerateFontList } from "./useGenerateFontList"
import { useGenerateLanguageList } from "./useGenerateLanguageList"
import { useGenerateTerminalItem } from "./useGenerateTerminalItem"
import { useGenerateThemeList } from "./useGenerateThemeList"
import { useGenerateTimerModeList } from "./useGenerateTimerModeList"
import { paths } from "@pages/routes"
import { RecursiveListItemType } from "@shared/types"

export const useGenerateHelpList = (onClose: () => void): RecursiveListItemType[] => {
    const languageList = useGenerateLanguageList()
    const timerModeList = useGenerateTimerModeList()
    const themeList = useGenerateThemeList()
    const fontList = useGenerateFontList()
    const terminalItem = useGenerateTerminalItem(onClose)

    const navigate = useNavigate()

    const helpTabs = useMemo(() => {
        return [
            {
                name: "Language",
                children: languageList
            },
            {
                name: "Timer mode",
                children: timerModeList
            },
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
                name: "Results Page",
                action: () => {
                    navigate(paths.resultsPage)
                }
            },
            {
                name: "Login Page",
                action: () => {
                    navigate(paths.loginPage)
                }
            },
            {
                name: "Registration Page",
                action: () => {
                    navigate(paths.registerPage)
                }
            }
        ]
    }, [languageList, timerModeList, themeList, fontList, terminalItem])

    return helpTabs
}
