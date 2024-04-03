import { ModeSmallItemProps } from "@features/select-typing-mode"
import { Tile } from "@shared/ui/tile"

export const ModeSmallItem = (props: ModeSmallItemProps) => {
    const { isActive, ...tileProps } = props

    return (
        <Tile
            bg={isActive ? "primary.700" : "transparent"}
            borderWidth="1px"
            borderColor="main.100"
            _hover={{ bg: "primary.700" }}
            {...tileProps}
        />
    )
}
