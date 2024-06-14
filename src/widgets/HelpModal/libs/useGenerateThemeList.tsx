import { useMemo } from "react"

import { useUnit } from "effector-react"

import { $currentTheme, themes, useChangeTheme } from "@features/settings/theme"
import { RecursiveListItemType } from "@shared/types"
import { TileItemHelplist, TileText } from "@shared/ui/tile"

export const useGenerateThemeList = () => {
    const currentTheme = useUnit($currentTheme)
    const { changeTheme } = useChangeTheme()

    const themeList = useMemo(() => {
        return themes.map(theme => ({
            name: theme.name,
            action: () => {
                changeTheme(theme)
            },
            renderItem: ({ isFocus, item, ref }) => {
                return (
                    <TileItemHelplist
                        ref={ref}
                        onClick={item.action}
                        isActive={currentTheme.name === item.name}
                        isFocus={isFocus}
                    >
                        <TileText>
                            {` ${item.name} ${item.parentName ? "-" : ""} `}
                            <em>{item.parentName}</em>
                        </TileText>
                    </TileItemHelplist>
                )
            }
        })) as RecursiveListItemType[]
    }, [currentTheme])

    return themeList
}
