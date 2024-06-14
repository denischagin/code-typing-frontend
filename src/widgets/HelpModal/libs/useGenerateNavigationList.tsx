import { Box } from "@chakra-ui/react"

import { NavLink } from "react-router-dom"

import { paths } from "@pages/routes"
import { RecursiveListItemType } from "@shared/types"
import { TileItemHelplist, TileText } from "@shared/ui/tile"

export const useGenerateNavigationList = () => {
    const links = [
        {
            name: "Typing Code Page",
            link: paths.typingCodePage
        },
        {
            name: "Results Page",
            link: paths.resultsPage
        },
        {
            name: "Login Page",
            link: paths.loginPage
        },
        {
            name: "Registration Page",
            link: paths.registerPage
        },
        {
            name: "Main page",
            link: paths.mainPage
        }
    ]
    return links.map(link => {
        return {
            name: link.name,
            renderItem: ({ isFocus, item, ref }) => {
                return (
                    <Box
                        sx={{
                            "& .active .link-tile": {
                                background: "primary.900",
                                _hover: {
                                    opacity: "0.8",
                                    background: "primary.600"
                                }
                            }
                        }}
                    >
                        <NavLink
                            to={link.link}
                            key={link.name}
                            className={(options: { isActive: boolean }) =>
                                options.isActive ? "active" : ""
                            }
                        >
                            <TileItemHelplist isFocus={isFocus} ref={ref} className="link-tile">
                                <TileText>{item.name}</TileText>
                            </TileItemHelplist>
                        </NavLink>
                    </Box>
                )
            }
        }
    }) as RecursiveListItemType[]
}
