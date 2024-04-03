import { Box } from "@chakra-ui/react"

import { AsideTabPanelsProps, useAside } from "@shared/ui/aside"

export const AsideTabPanels = (props: AsideTabPanelsProps) => {
    const { children, ...restProps } = props

    const { currentTabName } = useAside()
    if (currentTabName === null) return null

    return (
        <Box {...restProps} borderRight="1px solid" borderColor="main.100">
            {children}
        </Box>
    )
}
