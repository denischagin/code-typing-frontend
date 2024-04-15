import { Flex, FlexProps } from "@chakra-ui/react"

export const PaginationItem = (props: { isActive?: boolean } & FlexProps) => {
    const { isActive, ...restProps } = props

    const activeStyles: FlexProps = {
        bgColor: "primary.700"
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
            {...restProps}
        />
    )
}
