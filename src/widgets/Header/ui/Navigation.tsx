import { useState } from "react"

import { Flex, List, Text } from "@chakra-ui/react"

import { Link, useLocation } from "react-router-dom"

import { useViewer } from "@entities/viewer"
import { AlertDialogLogout } from "@features/auth/logout"
import { paths } from "@pages/routes"
import { ReactIcon } from "@shared/ui/icons"
import { TabItem, TabList } from "@shared/ui/tabs"

export type CommonPath = {
    name: string
    path?: string
    onClick?: () => void
}

export const Navigation = () => {
    const [isOpenLogout, setIsOpenLogout] = useState(false)
    const { isAuthenticated } = useViewer()
    const location = useLocation()

    const handleCloseLogout = () => {
        setIsOpenLogout(false)
    }

    const handleOpenLogout = () => {
        setIsOpenLogout(true)
    }

    const navigationItems: CommonPath[] = [
        {
            name: "CodeTyping.tsx",
            path: paths.typingCodePage
        },
        {
            name: "Results.tsx",
            path: paths.resultsPage
        },
        ...(isAuthenticated
            ? [
                  {
                      name: "Logout.tsx",
                      onClick: handleOpenLogout
                  }
              ]
            : [
                  {
                      name: "Login.tsx",
                      path: paths.loginPage
                  },
                  {
                      name: "Register.tsx",
                      path: paths.registerPage
                  }
              ])
    ]

    return (
        <>
            <Flex as="nav" align="end" ml="auto" h="100%">
                <TabList>
                    {navigationItems.map(({ name, path, onClick }) => (
                        <TabItem key={name} isActive={location.pathname === path}>
                            <ReactIcon mr={2} w="15px" h="15px" />
                            {path ? (
                                <Link to={path}>{name}</Link>
                            ) : (
                                <Text onClick={onClick} cursor="pointer">
                                    {name}
                                </Text>
                            )}
                        </TabItem>
                    ))}
                </TabList>
                <List display="flex" h="100%"></List>
            </Flex>

            <AlertDialogLogout isOpen={isOpenLogout} onClose={handleCloseLogout} />
        </>
    )
}
