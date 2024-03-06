import { Children } from "react";

import { Box } from "@chakra-ui/react";

import { AsideTabPanelsProps, useAside } from "@shared/ui/aside";

export const AsideTabPanels = (props: AsideTabPanelsProps) => {
    const { children, ...restProps } = props

    const { currentTabIndex } = useAside()

    return (
        <Box {...restProps}>
            {currentTabIndex !== null && Children.map(children, (child, index) => (
                currentTabIndex === index ? child : null
            ))}
        </Box>
    )
}
