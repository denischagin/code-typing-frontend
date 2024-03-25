import {Children} from "react";

import {Box} from "@chakra-ui/react";

import {AsideTabPanelsProps, useAside} from "@shared/ui/aside";

export const AsideTabPanels = (props: AsideTabPanelsProps) => {
    const {children, ...restProps} = props

    const {currentTabIndex} = useAside()

    return (
        currentTabIndex !== null &&
        <Box {...restProps} borderRight="1px solid" borderColor="whiteAlpha.100">
            {Children.map(children, (child, index) => (
                currentTabIndex === index ? child : null
            ))}
        </Box>
    )
}
