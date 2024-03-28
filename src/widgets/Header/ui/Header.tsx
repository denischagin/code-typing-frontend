import {Box,Container, Flex, Text} from "@chakra-ui/react";

import {NavLink} from "react-router-dom";

import {paths} from "@pages/routes";
import {Navigation} from "@widgets/Header";

export const Header = () => {
    return (
        <Flex as="header" bgColor="contrast.400" borderBottom="1px solid" borderBottomColor="main.100">
            <Container maxW="100%" display="flex">
                <Box p={2}>
                    <NavLink to={paths.mainPage}>
                        <Text fontSize="large" fontWeight="bold" color="main.900">
                            Code-typing
                        </Text>
                    </NavLink>
                </Box>

                <Navigation/>
            </Container>
        </Flex>
    )
}
