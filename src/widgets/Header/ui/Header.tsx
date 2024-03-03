import {Container, Flex, List, ListItem, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
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
                                <Link to={paths.resultsPage}>Results</Link>
                            </ListItem>

                            <ListItem>
                                <Link to={paths.typingCodePage}>Code typing</Link>
                            </ListItem>

                            <ListItem>
                                <Link to={paths.loginPage}>Login</Link>
                            </ListItem>

                            <ListItem>
                                <Link to={paths.registerPage}>Register</Link>
                            </ListItem>
                        </List>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}
