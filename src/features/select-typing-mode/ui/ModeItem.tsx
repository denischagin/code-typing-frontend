import {ModeItemProps} from "./ModeItem.interface.ts";
import {Tile} from "@shared/ui/tile";

export const ModeItem = (props: ModeItemProps) => {
    const {isActive, ...tileProps} = props

    return (
        <Tile
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap={2}
            border="1px solid"
            borderColor={isActive ? 'whiteAlpha.500' : 'transparent'}
            {...tileProps}
        />
    )
}