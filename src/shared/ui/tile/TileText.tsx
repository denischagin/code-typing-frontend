import { Text } from "@chakra-ui/react"

import { TileTextProps } from "./Tile.interface.ts"

export const TileText = (props: TileTextProps) => {
    return <Text fontSize="15px" {...props} />
}
