import {Container, Flex, List, ListItem, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {paths} from "@pages/index.tsx";
import {useLogout, useViewer} from "@entities/viewer";

export type CommonPath = {
    name: string;
    path?: string;
    onClick?: () => void;
}
export const Header = () => {
    const {mutate: logoutMutate} = useLogout();
    const {isAuthenticated} = useViewer();

    const navigationItems: CommonPath[] = [
        {
            name: "Results",
            path: paths.resultsPage,
        },
        {
            name: 'Code Typing',
            path: paths.typingCodePage,
        },
        ...(isAuthenticated ? [
            {
                name: "Logout",
                onClick: logoutMutate,
            }
        ] : [
            {
                name: "Login",
                path: paths.loginPage,
            },
            {
                name: "Register",
                path: paths.registerPage,
            },
        ]),
    ]


    return (
        <Flex as="header" bgColor="blackAlpha.400" mb="10px" py="5px">
            <Container maxW="100%">
                <Flex justify="space-between" align="center">
                    <Text fontSize="x-large">
                        Speed-typing
                    </Text>

                    <Flex as="nav" align="center">
                        <List display="flex" gap={5}>
                            {navigationItems.map(item => (
                                <ListItem key={item.name}>
                                    {item.path ? (
                                        <Link to={item.path}>
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <Text onClick={item.onClick} cursor="pointer">
                                            {item.name}
                                        </Text>
                                    )
                                    }
                                </ListItem>
                            ))}
                        </List>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}
