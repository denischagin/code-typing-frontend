import { ListItem } from "@chakra-ui/react"

import { TabItemProps } from "@shared/ui/tabs"

export const TabItem = (props: TabItemProps) => {
    const { isActive, ...restProps } = props

    return (
        <ListItem
            display="inline-flex"
            alignItems="center"
            h="100%"
            px={5}
            py={2}
            borderBottom="2px solid"
            color="main.900"
            borderBottomColor={isActive ? "primary.500" : "transparent"}
            _hover={{
                borderBottomColor: isActive ? "primary.400" : "primary.900"
            }}
            transition="all 300ms"
            {...restProps}
        />
    )
}
