import {useState} from "react";

import {Flex, List, ListItem, Text} from "@chakra-ui/react";

import {Link, useLocation} from "react-router-dom";

import {useViewer} from "@entities/viewer";
import {AlertDialogLogout} from "@features/auth/logout";
import {paths} from "@pages/routes";


export type CommonPath = {
    name: string;
    path?: string;
    onClick?: () => void;
}

export const Navigation = () => {
    const [isOpenLogout, setIsOpenLogout] = useState(false);
    const {isAuthenticated} = useViewer()
    const location = useLocation();

    const handleCloseLogout = () => {
        setIsOpenLogout(false);
    }

    const handleOpenLogout = () => {
        setIsOpenLogout(true);
    }

    const navigationItems: CommonPath[] = [
        {
            name: 'CodeTyping.tsx',
            path: paths.typingCodePage,
        },
        {
            name: "Results.tsx",
            path: paths.resultsPage,
        },
        ...(isAuthenticated ? [
            {
                name: "Logout.tsx",
                onClick: handleOpenLogout,
            }
        ] : [
            {
                name: "Login.tsx",
                path: paths.loginPage,
            },
            {
                name: "Register.tsx",
                path: paths.registerPage,
            },
        ]),
    ]


    return (
        <>
            <Flex as="nav" align="end" ml="auto" h="100%">
                <List display="flex" h="100%">
                    {navigationItems.map(item => (
                        <ListItem
                            key={item.name}
                            display="inline-flex"
                            alignItems="center"
                            h="100%"
                            px={5}
                            py={2}
                            borderBottom="2px solid"
                            borderBottomColor={location.pathname === item.path ? "blue.500" : "transparent"}
                            _hover={{
                                borderBottomColor: location.pathname === item.path ? "blue.400" : "blue.900",
                            }}
                            transition="all 300ms"
                        >
                            {item.path ? (
                                <Link to={item.path}>
                                    {item.name}
                                </Link>
                            ) : (
                                <Text onClick={item.onClick} cursor="pointer">
                                    {item.name}
                                </Text>
                            )}
                        </ListItem>
                    ))}
                </List>
            </Flex>


            <AlertDialogLogout isOpen={isOpenLogout} onClose={handleCloseLogout}/>
        </>
    )
}