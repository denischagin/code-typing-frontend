import {Fragment} from "react";

import {Box, Flex} from "@chakra-ui/react";

import {$currentTheme, AppTheme, themes, useChangeTheme} from "@features/theme";
import {settingTabs} from "@shared/constants";
import {AsideButtons, AsideCloseButton, AsideTabPanel} from "@shared/ui/aside";
import {Tile, TileText} from "@shared/ui/tile";
import {useUnit} from "effector-react";

export const ChangeThemeTabPanel = () => {
    const currentTheme = useUnit($currentTheme)
    const {changeTheme} = useChangeTheme()


    const handleChangeThemeClick = (newTheme: AppTheme) => () => {
        changeTheme(newTheme)
    }

    return (
        <AsideTabPanel name={settingTabs.theme}>
            <AsideButtons>
                <AsideCloseButton>
                    —
                </AsideCloseButton>
            </AsideButtons>

            <Flex direction="column" gap={2} mt={5} alignItems={"center"}>
                {themes.map((theme) => {
                    const {colors, id, name} = theme
                    return (
                        <Tile
                            key={id}
                            flexDirection={"column"}
                            alignItems={"center"}
                            w="100%"
                            gap={1}
                            isActive={currentTheme.id === id}
                            onClick={handleChangeThemeClick(theme)}
                        >
                            <TileText>{name}</TileText>

                            <Flex wrap={"wrap"} gap={1} align={"center"}>
                                {Object.keys(colors).map(key => (
                                    <Fragment key={key}>
                                        <Box
                                            bg={colors[key as keyof typeof colors]["300"]}
                                            w={4}
                                            h={4}
                                            borderRadius="50%"
                                        />
                                        <Box
                                            bg={colors[key as keyof typeof colors]["700"]}
                                            w={4}
                                            h={4}
                                            borderRadius="50%"
                                        />
                                    </Fragment>
                                ))}
                            </Flex>
                        </Tile>
                    );
                })}
            </Flex>

        </AsideTabPanel>
    )
}
