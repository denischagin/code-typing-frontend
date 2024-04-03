import { FontState } from "@entities/font"
import { FontFamilies, storageKeysEnum, typingFontSizes } from "@shared/constants"

export const loadStateFromLocalStorage = (): FontState => {
    const fontFamily = localStorage.getItem(storageKeysEnum.fontFamily)
    const fontSize = localStorage.getItem(storageKeysEnum.typingFontSize)

    const result: FontState = {
        fontFamily: FontFamilies.cascadiaCode,
        typingFontSize: typingFontSizes[1].fontSize
    }

    if (Object.values(FontFamilies).includes(fontFamily as FontFamilies))
        result.fontFamily = fontFamily as FontFamilies

    const inFontSizes = typingFontSizes.some(item => Number(fontSize) === item.fontSize)

    if (fontSize && inFontSizes) result.typingFontSize = Number(fontSize)

    return result
}
