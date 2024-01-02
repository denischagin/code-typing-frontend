import {Container, Flex, List, ListItem, Text} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {paths} from "@pages/index.tsx";

export const Header = () => {
    return (
        <Flex as="header" bgColor="blackAlpha.400" mb="10px" py="5px">
            <Container maxW="100%">
                <Flex justify="space-between" align="center">
                    <Text fontSize="x-large">
                        Speed-typing
                    </Text>

                    <Flex as="nav" align="center">
                        <List display="flex" gap={5}>
                            <ListItem>
                                <NavLink to={paths.resultsPage}>Results</NavLink>
                            </ListItem>

                            <ListItem>
                                <NavLink to={paths.typingPage}>Go typing</NavLink>
                            </ListItem>

                            <ListItem>
                                <NavLink to={paths.typingCodePage}>Code typing</NavLink>
                            </ListItem>
                        </List>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}