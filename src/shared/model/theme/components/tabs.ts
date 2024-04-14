import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

import { tabsAnatomy } from "@chakra-ui/anatomy"

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys)

const colorfulVariant = definePartsStyle(props => {
    const { colorScheme: c } = props // extract colorScheme from component props

    return {
        tab: {
            bg: "gray.900",
            color: `${c}.300`,
            borderTopRadius: "lg",
            border: "1px solid",
            borderColor: `main.200`,
            _selected: {
                color: "main.900",
                bg: `${c}.900`
            }
        },
        tablist: {
            display: "flex",
            gap: 1
        },
        tabpanel: {
            borderBottomRadius: "lg",
            borderTopRightRadius: "lg",
            bg: "gray.900",
            border: "1px solid",
            borderColor: `main.200`,
            h: "100%"
        }
    }
})

const variants = {
    colorful: colorfulVariant
}

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ variants })
