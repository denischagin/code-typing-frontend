import {extendTheme} from "@chakra-ui/react";

import {$currentTheme} from "@features/theme";
import {useUnit} from "effector-react";

export const useCurrentTheme = () => {
    const theme = useUnit($currentTheme)

    const themeConfig = {
        fonts: {
            heading: `"JetBrains Mono", monospace`,
            body: `"JetBrains Mono", monospace`,
        },
        styles: {
            global: {
                body: {
                    bg: 'contrast.200',
                    color: 'main.900',
                },
            },
        },
        components: {
            Button: {
                baseStyle: {
                    fontWeight: 'bold', // Normally, it is "semibold"
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
