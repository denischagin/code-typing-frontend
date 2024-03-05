import {Container, Flex, List, ListItem, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {paths} from "@pages/routes";
import {useViewer} from "@entities/viewer";
import {AlertDialogLogout} from "@features/auth/logout";
import {useState} from "react";

export type CommonPath = {
    name: string;
    path?: string;
    onClick?: () => void;
}
export const Header = () => {
    const {isAuthenticated} = useViewer();
    const [isOpenLogout, setIsOpenLogout] = useState(false);

    const handleCloseLogout = () => {
        setIsOpenLogout(false);
    }

    const handleOpenLogout = () => {
        setIsOpenLogout(true);
    }

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
                onClick: handleOpenLogout,
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
        <>
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

            <AlertDialogLogout isOpen={isOpenLogout} onClose={handleCloseLogout}/>
        </>

    )
}
