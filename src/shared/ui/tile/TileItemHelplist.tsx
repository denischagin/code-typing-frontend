import { forwardRef } from "react"

import { Tile, TileProps } from "@shared/ui/tile"

export type TileItemHelplistProps = {
    isFocus?: boolean
} & TileProps

export const TileItemHelplist = forwardRef<HTMLDivElement, TileItemHelplistProps>((props, ref) => {
    const { isFocus, isActive, ...restProps } = props

    return (
        <Tile
            ref={ref}
            border="1px solid transparent"
            borderColor={isFocus ? "primary.800" : "transparent"}
            {...(isActive
                ? {
                      background: "primary.600",
                      _hover: {
                          opacity: "0.8",
                          background: "primary.600"
                      }
                  }
                : {})}
            {...restProps}
        />
    )
})
