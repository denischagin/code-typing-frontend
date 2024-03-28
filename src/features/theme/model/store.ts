import {
    AppTheme,
    blue,
    blueDark,
    deepDark,
    extraDark,
    green,
    greenDark,
    main,
    violet,
    violetDark
} from "@features/theme";
import {storageKeysEnum} from "@shared/constants";
import {createEvent, createStore} from "effector";


export const themes = [
    main,
    deepDark,
    violet, violetDark,
    blue, blueDark,
    green, greenDark,
    extraDark,
]

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
