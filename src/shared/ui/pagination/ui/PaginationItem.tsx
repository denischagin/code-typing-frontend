import { Flex, FlexProps } from "@chakra-ui/react"

import { PaginationItemProps } from "@shared/ui/pagination"

export const PaginationItem = (props: PaginationItemProps) => {
    const { isActive, isDisabled, ...restProps } = props

    const activeStyles: FlexProps = {
        bgColor: "primary.700"
    }

    const inactiveStyles: FlexProps = {
        bgColor: "main.400",
        _hover: {},
        cursor: "not-allowed"
    }

    return (
        <Flex
            as={"button"}
            justify="center"
            align="center"
            bgColor="main.200"
            px="10px"
            minW="50px"
            borderRadius="30px"
            _hover={{ bgColor: "primary.900" }}
            transition="all 300ms"
            {...(isActive && activeStyles)}
            {...(isDisabled && inactiveStyles)}
            {...restProps}
        />
    )
}
