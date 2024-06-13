import { RefObject, useMemo } from "react"

import { Text } from "@chakra-ui/react"

import { useChangeFontFamily, useChangeFontSize, useCurrentFont } from "@entities/font"
import { FontFamilies, typingFontSizes } from "@shared/constants"
import { RecursiveListItemType } from "@shared/types"
import { TileItemHelplist } from "@shared/ui/tile"

export const useGenerateFontList = () => {
    const font = useCurrentFont()
    const changeFontFamily = useChangeFontFamily()
    const changeFontSize = useChangeFontSize()

    const fontList = useMemo(() => {
        return [
            {
                name: "Sizes",
                children: typingFontSizes.map(fontSize => {
                    return {
                        name: fontSize.fullName,
                        action: () => {
                            changeFontSize(fontSize.fontSize)
                        },
                        renderItem: ({ isFocus, item, ref }) => {
                            return (
                                <TileItemHelplist
                                    isActive={font.typingFontSize === fontSize.fontSize}
                                    isFocus={isFocus}
                                    ref={ref}
                                    onClick={item.action}
                                >
                                    <Text>{fontSize.fullName}</Text>
                                </TileItemHelplist>
                            )
                        }
                    }
                }) as RecursiveListItemType[]
            },
            {
                name: "Font Families",
                children: Object.entries(FontFamilies).map(([fontFamily, fontFamilyValue]) => ({
                    name: fontFamily,
                    action: () => {
                        changeFontFamily(fontFamilyValue)
                    },
                    renderItem: ({ isFocus, item, ref }) => {
                        return (
                            <TileItemHelplist
                                isActive={font.fontFamily === fontFamilyValue}
                                isFocus={isFocus}
                                ref={ref as RefObject<HTMLDivElement>}
                                onClick={item.action}
                            >
                                <Text>{fontFamily}</Text>
                            </TileItemHelplist>
                        )
                    }
                }))
            }
        ] as RecursiveListItemType[]
    }, [font])

    return fontList
}
