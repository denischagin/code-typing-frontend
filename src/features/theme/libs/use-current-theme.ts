import { extendTheme } from "@chakra-ui/react"

import { useUnit } from "effector-react"

import { useCurrentFont } from "@entities/font"
import { $currentTheme } from "@features/theme"
import { ColorTokens } from "@shared/constants"
import { components } from "@shared/model/theme"

export const useCurrentTheme = () => {
    const theme = useUnit($currentTheme)
    const font = useCurrentFont()

    const defaultColors = {
        [ColorTokens.headerBg]: "contrast.400",
        [ColorTokens.footerBg]: "contrast.400",
        [ColorTokens.printingTextActive]: "main.900",
        [ColorTokens.printingTextDisabled]: "main.500",
        [ColorTokens.asideBg]: "contrast.300"
    }

    const themeConfig = {
        fonts: {
            heading: font.fontFamily,
            body: font.fontFamily
        },
        semanticTokens: {
            colors: {
                ...defaultColors,
                ...theme.semanticTokens?.colors
            }
        },
        styles: {
            global: {
                body: {
                    bg: theme.body ?? "contrast.200",
                    color: "main.900"
                }
            }
        },
        components: components
    }

    return extendTheme(themeConfig, { colors: theme.colors })
}
