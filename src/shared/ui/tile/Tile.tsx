import { forwardRef } from "react"

import { Flex } from "@chakra-ui/react"

import { TileProps } from "./Tile.interface.ts"

export const Tile = forwardRef<HTMLDivElement, TileProps>((props, ref) => {
    const { isActive, ...flexProps } = props

    return (
        <Flex
            ref={ref}
            justifyContent="space-between"
            alignContent="center"
            bg={isActive ? "main.300" : "main.100"}
            _hover={{
                bg: isActive ? "main.400" : "main.200"
            }}
            transition="all 0.2s"
            p="7px"
            borderRadius="10px"
            cursor="pointer"
            {...flexProps}
        />
    )
})
