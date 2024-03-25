import {Box} from "@chakra-ui/react";

import {AsideTabListProps} from "@shared/ui/aside";

export const AsideTabList = (props: AsideTabListProps) => {
    const {children, ...restProps} = props

    return (
        <Box
            display="flex"
            flexDirection="column"
            gap="7px"
            p="4px"
            width="47px"
            borderRight="1px solid"
            borderColor="whiteAlpha.100"
            {...restProps}
        >
            {children}
        </Box>
    )
}