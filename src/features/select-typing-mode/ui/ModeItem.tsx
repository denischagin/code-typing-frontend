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
            border="1px dashed"
            borderColor={isActive ? 'main.500' : 'transparent'}
            bg={'main.50'}
            _hover={{
                borderColor: isActive? 'main.500' : 'main.200',
            }}
            {...tileProps}
        />
    )
}