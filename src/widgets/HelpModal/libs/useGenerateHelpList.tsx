import { RefObject, useMemo } from "react"

import { useUnit } from "effector-react"

import { useCurrentFont } from "@entities/font"
import { $currentTheme, themes, useChangeTheme } from "@features/settings/theme"
import { FontFamilies } from "@shared/constants"
import { RecursiveListItemType } from "@shared/types"
import { Tile } from "@shared/ui/tile"

export const useGenerateHelpList = () => {
    const currentTheme = useUnit($currentTheme)
    const { changeTheme } = useChangeTheme()

    const font = useCurrentFont()

    const helpTabs: RecursiveListItemType[] = useMemo(
        () => [
            {
                name: "Themes",
                children: themes.map(theme => ({
                    name: theme.name,
                    action: () => {
                        changeTheme(theme)
                    },
                    renderItem: ({ isFocus, item, ref }) => {
                        return (
                            <Tile
                                ref={ref as RefObject<HTMLDivElement>}
                                onClick={item.action}
                                border="1px solid transparent"
                                borderColor={isFocus ? "primary.800" : "transparent"}
                                {...(currentTheme.name === item.name
                                    ? {
                                          background: "primary.600"
                                      }
                                    : {})}
                            >
                                {item.name}
                            </Tile>
                        )
                    }
                }))
            },
            {
                name: "Font",
                children: [
                    {
                        name: "Sizes",
                        children: [
                            {
                                name: "Lg",
                                action: () => {
                                    console.log("font lg")
                                }
                            },
                            {
                                name: "Md",
                                action: () => {
                                    console.log("font md")
                                }
                            }
                        ]
                    },
                    {
                        name: "Font Families",
                        children: Object.keys(FontFamilies).map(fontFamily => ({
                            name: fontFamily,
                            action: () => {
                                // console.log(fontFamily)
                                // changeFontFamily(fontFamily as FontFamilies)
                            },
                            renderItem: ({ isFocus, item, ref }) => {
                                return (
                                    <Tile
                                        ref={ref as RefObject<HTMLDivElement>}
                                        onClick={item.action}
                                        border="1px solid transparent"
                                        borderColor={isFocus ? "primary.800" : "transparent"}
                                        {...(font.fontFamily === item.name
                                            ? {
                                                  background: "primary.600"
                                              }
                                            : {})}
                                    >
                                        {item.name}
                                    </Tile>
                                )
                            }
                        }))
                    }
                ]
            }
        ],
        [currentTheme]
    )

    return helpTabs
}
