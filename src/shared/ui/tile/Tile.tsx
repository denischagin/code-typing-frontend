import {Flex} from "@chakra-ui/react";

import {TileProps} from "./Tile.interface.ts";


export const Tile = (props: TileProps) => {
    const {isActive, ...flexProps} = props;

    return (
        <Flex
            justifyContent="space-between"
            alignContent="center"
            bg={isActive ? "whiteAlpha.300" : "whiteAlpha.100"}
            _hover={{
                bg: isActive ? "whiteAlpha.400" : "whiteAlpha.200"
            }}
            transition="all 0.2s"
            p="7px"
            borderRadius="10px"
            cursor="pointer"
            {...flexProps}
        />
    )
}