import { createEvent, createStore } from "effector"
import { useUnit } from "effector-react"

import { loadStateFromLocalStorage } from "./load-state-from-local-storage.ts"
import { FontState } from "@entities/font/model"
import { FontFamilies, storageKeysEnum } from "@shared/constants"

const eventChangeFont = createEvent<FontFamilies>()
const eventChangeFontSize = createEvent<number>()

export const $font = createStore<FontState>(loadStateFromLocalStorage())
    .on(eventChangeFont, (state, font) => ({
        ...state,
        fontFamily: font
    }))
    .on(eventChangeFontSize, (state, fontSize) => ({
        ...state,
        typingFontSize: fontSize
    }))

$font.watch(state => {
    localStorage.setItem(storageKeysEnum.fontFamily, state.fontFamily)
    localStorage.setItem(storageKeysEnum.typingFontSize, state.typingFontSize.toString())
})
export const useCurrentFont = () => useUnit($font)
export const useChangeFontFamily = () => useUnit(eventChangeFont)
export const useChangeFontSize = () => useUnit(eventChangeFontSize)
