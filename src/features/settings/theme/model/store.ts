import { createEvent, createStore } from "effector"

import { AppTheme } from "@features/settings/theme"
import { storageKeysEnum } from "@shared/constants"
import {
    blueDarkTheme,
    blueTheme,
    deepDarkTheme,
    extraDarkTheme,
    greenDarkTheme,
    greenTheme,
    mainTheme,
    violetDarkTheme,
    violetTheme,
    yellowDarkTheme,
    yellowTheme
} from "@shared/model/theme/themes"

export const themes = [
    mainTheme,
    deepDarkTheme,
    violetTheme,
    violetDarkTheme,
    blueTheme,
    blueDarkTheme,
    greenTheme,
    greenDarkTheme,
    yellowTheme,
    yellowDarkTheme,
    extraDarkTheme
]

const loadThemeFromStorage = () => {
    const id = localStorage.getItem(storageKeysEnum.theme)
    if (id) {
        const theme = themes.find(theme => theme.id === id)
        if (theme) {
            return theme
        }
    }
    return themes[0]
}

export const eventChangeTheme = createEvent<AppTheme>()

export const $currentTheme = createStore<AppTheme>(loadThemeFromStorage()).on(
    eventChangeTheme,
    (_, newTheme) => newTheme
)

$currentTheme.watch(theme => {
    localStorage.setItem(storageKeysEnum.theme, theme.id)
})
