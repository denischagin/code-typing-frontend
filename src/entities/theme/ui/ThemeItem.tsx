import {Fragment} from "react";

import {Flex} from "@chakra-ui/react";

import {AppTheme} from "@features/theme";
import {ColorCircle} from "@shared/ui/color";
import {Tile, TileText} from "@shared/ui/tile";

export interface ThemeItemProps extends AppTheme {
    onChangeTheme: (theme: AppTheme) => void
    currentTheme: AppTheme
}

export const ThemeItem = (props: ThemeItemProps) => {
    const {
        currentTheme,
        onChangeTheme,
        ...theme
    } = props
    const {
        id,
        colors,
        name
    } = theme

    const handleChangeThemeClick = (theme: AppTheme) => () => {
        onChangeTheme(theme)
    }

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
                {Object.keys(colors).map(key => {
                    const color = colors[key as keyof typeof colors]
                    return (
                        <Fragment key={key}>
                            <ColorCircle color={color["300"]}/>
                            <ColorCircle color={color["700"]}/>
                        </Fragment>
                    );
                })}
            </Flex>
        </Tile>
    )
}