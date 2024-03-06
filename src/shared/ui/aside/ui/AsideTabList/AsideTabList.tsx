import {Children} from "react";

import {Box} from "@chakra-ui/react";

import {AsideTabListProps, useAside} from "@shared/ui/aside";

export const AsideTabList = (props: AsideTabListProps) => {
    const {children, ...restProps} = props

    const {currentTabIndex, onChangeTabIndex} = useAside()

    const handleTabClick = (index: number) => () => {
        onChangeTabIndex && onChangeTabIndex(index)
    }

    return (
        <Box {...restProps}>
            {currentTabIndex === null && Children.map(children, (child, index) => (
                <Box width="100%" onClick={handleTabClick(index)}>
                    {child}
                </Box>
            ))}
        </Box>
    )
}