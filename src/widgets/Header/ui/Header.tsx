import { Box, Container, Flex, Link } from "@chakra-ui/react"

import { NavLink } from "react-router-dom"

import { paths } from "@pages/routes"
import { Navigation } from "@widgets/Header"

export const Header = () => {
    return (
        <Flex as="header" bgColor="headerBg" borderBottom="1px solid" borderBottomColor="main.100">
            <Container maxW="100%" display="flex">
                <Box p={2}>
                    <Link
                        as={NavLink}
                        to={paths.mainPage}
                        fontSize="large"
                        fontWeight="bold"
                        color="main.900"
                        _hover={{
                            color: "main.800"
                        }}
                    >
                        Code-typing
                    </Link>
                </Box>

                <Navigation />
            </Container>
        </Flex>
    )
}
