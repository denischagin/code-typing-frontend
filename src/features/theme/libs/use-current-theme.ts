import {extendTheme} from "@chakra-ui/react";

import {$currentTheme} from "@features/theme";
import {ColorTokens} from "@shared/constants";
import {useUnit} from "effector-react";

export const useCurrentTheme = () => {
    const theme = useUnit($currentTheme)

    const defaultColors = {
        [ColorTokens.headerBg]: "contrast.400",
        [ColorTokens.footerBg]: "contrast.400",
        [ColorTokens.printingTextActive]: "main.900",
        [ColorTokens.printingTextDisabled]: "main.500",
        [ColorTokens.asideBg]: "contrast.300",
    }

    const themeConfig = {
        fonts: {
            heading: `"JetBrains Mono", monospace`,
            body: `"JetBrains Mono", monospace`,
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
                    bg: theme.body ?? 'contrast.200',
                    color: 'main.900',
                },
            },
        },
        components: {
            Button: {
                baseStyle: {
                    fontWeight: 'bold',
                },
                variants: {
                    solid: {
                        bg: 'main.100',
                        color: 'main.900',
                        _hover: {
                            bg: 'main.300'
                        }
                    }
                },
            },
            Link: {
                baseStyle: {
                    color: 'main.100',
                    _hover: {
                        color: 'main.300'
                    }
                },
            },
            Text: {
                baseStyle: {
                    color: 'main.900',
                },
            },
            Select: {
                baseStyle: {
                    color: 'main.900',
                },
            },
        },
    }


    return extendTheme(themeConfig, {colors: theme.colors})
}
