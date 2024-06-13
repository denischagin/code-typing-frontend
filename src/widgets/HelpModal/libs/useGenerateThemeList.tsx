import { useMemo } from "react"

import { Text } from "@chakra-ui/react"

import { useUnit } from "effector-react"

import { $currentTheme, themes, useChangeTheme } from "@features/settings/theme"
import { RecursiveListItemType } from "@shared/types"
import { TileItemHelplist } from "@shared/ui/tile"

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
                        <Text>{item.name}</Text>
                    </TileItemHelplist>
                )
            }
        })) as RecursiveListItemType[]
    }, [currentTheme])

    return themeList
}
