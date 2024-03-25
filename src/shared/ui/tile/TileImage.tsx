import {Image} from "@chakra-ui/react";

import {TileImageProps} from "./Tile.interface.ts";

export const TileImage = (props: TileImageProps) => {
    return (
        <Image w="25px" {...props} />
    )
}