import { Flex, FlexProps } from "@chakra-ui/react"

export const PaginationItem = (props: FlexProps) => {
    return (
        <Flex
            as={"button"}
            justify="center"
            align="center"
            bgColor="main.200"
            px="10px"
            minW="50px"
            borderRadius="30px"
            _hover={{ bgColor: "primary.700" }}
            transition="all 300ms"
            {...props}
        />
    )
}
