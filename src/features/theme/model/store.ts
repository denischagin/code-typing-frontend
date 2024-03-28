import main from "./themes/main.ts";
import {AppTheme} from "@features/theme";
import blue from "@features/theme/model/themes/blue.ts";
import deepDark from "@features/theme/model/themes/deep-dark.ts";
import extraDark from "@features/theme/model/themes/extraDark.ts";
import violet from "@features/theme/model/themes/violet.ts";
import {storageKeysEnum} from "@shared/constants";
import {createEvent, createStore} from "effector";


export const themes = [main, violet, blue, deepDark, extraDark]

const loadThemeFromStorage = () => {
    const id = localStorage.getItem(storageKeysEnum.theme)
    console.log(id)
    if (id) {
        const theme = themes.find(theme => theme.id === id)
        if (theme) {
            return theme
        }
    }
    return themes[0]
}

export const eventChangeTheme = createEvent<AppTheme>();

export const $currentTheme = createStore<AppTheme>(loadThemeFromStorage())
    .on(eventChangeTheme, (_, newTheme) => newTheme);

$currentTheme.watch(theme => {
    localStorage.setItem(storageKeysEnum.theme, theme.id)
})
