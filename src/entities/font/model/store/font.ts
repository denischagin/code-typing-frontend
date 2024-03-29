import {createEvent, createStore} from 'effector/compat'
import {useUnit} from 'effector-react'

import {FontState} from '@entities/font/model'
import {FontFamilies, storageKeysEnum, typingFontSizes} from '@shared/constants'

const eventChangeFont = createEvent<FontFamilies>()
const eventChangeFontSize = createEvent<number>()

const loadStateFromLocalStorage = (): FontState => {
    const fontFamily = localStorage.getItem(storageKeysEnum.fontFamily)
    const fontSize = localStorage.getItem(storageKeysEnum.typingFontSize)

    const result: FontState = {
        fontFamily: FontFamilies.cascadiaCode,
        typingFontSize: typingFontSizes[1]
    }

    if (Object.values(FontFamilies).includes(fontFamily as FontFamilies))
        result.fontFamily = fontFamily as FontFamilies

    if (fontSize && typingFontSizes.includes(Number(fontSize)))
        result.typingFontSize = Number(fontSize)

    return result
}

export const $font = createStore<FontState>(loadStateFromLocalStorage())
    .on(
        eventChangeFont,
        (state, font) => ({
            ...state,
            fontFamily: font
        }),
    )
    .on(
        eventChangeFontSize,
        (state, fontSize) => ({
            ...state,
            typingFontSize: fontSize
        }),
    )

$font.watch((state) => {
    localStorage.setItem(storageKeysEnum.fontFamily, state.fontFamily)
    localStorage.setItem(storageKeysEnum.typingFontSize, state.typingFontSize.toString())
})
export const useCurrentFont = () => useUnit($font)
export const useChangeFontFamily = () => useUnit(eventChangeFont)
export const useChangeFontSize = () => useUnit(eventChangeFontSize)
