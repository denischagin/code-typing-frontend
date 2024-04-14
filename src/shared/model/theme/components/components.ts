import { ThemeComponents } from "@chakra-ui/react"

import { tabsTheme } from "./tabs.ts"

export const components: ThemeComponents = {
    Button: {
        baseStyle: {
            fontWeight: "bold"
        },
        variants: {
            solid: {
                bg: "main.100",
                color: "main.900",
                _hover: {
                    bg: "main.300"
                }
            }
        }
    },
    Link: {
        baseStyle: {
            color: "main.100",
            _hover: {
                color: "main.300"
            }
        },
        variants: {
            main900: {
                color: "main.900",
                _hover: {
                    color: "main.700"
                }
            },
            primary200: {
                color: "primary.200",
                _hover: {
                    color: "primary.300"
                }
            },
            primary400: {
                color: "primary.400",
                _hover: {
                    color: "primary.600"
                }
            }
        },
        defaultProps: {
            variant: "main900"
        }
    },
    Text: {
        baseStyle: {
            color: "main.900"
        }
    },
    Select: {
        baseStyle: {
            color: "main.900"
        }
    },
    Tabs: tabsTheme
}
