import {Container, Flex, List, ListItem, Text} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {paths} from "@pages/index.tsx";

export const Header = () => {
    return (
        <Flex as="header" bgColor="blue.900" mb="10px" py="5px">
            <Container maxW="1200px">
                <Flex justify="space-between" align="center">
                    <Text fontSize="xx-large">
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
                        </List>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}