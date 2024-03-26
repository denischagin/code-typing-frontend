import {Box} from "@chakra-ui/react";

import {AsideTabPanelProps, useAside} from "@shared/ui/aside";

export const AsideTabPanel = (props: AsideTabPanelProps) => {
    const {name, ...restProps} = props

    const {currentTabName} = useAside()

    if (name !== currentTabName) return null

    return (
        <Box w="200px"  p="10px" {...restProps} />
    )
}