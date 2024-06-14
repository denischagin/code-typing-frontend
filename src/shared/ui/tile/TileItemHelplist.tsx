import { forwardRef } from "react"

import { Tile, TileProps } from "@shared/ui/tile"

export type TileItemHelplistProps = {
    isFocus?: boolean
} & TileProps

export const TileItemHelplist = forwardRef<HTMLDivElement, TileItemHelplistProps>((props, ref) => {
    const { isFocus, isActive, ...restProps } = props

    if (isFocus) console.log(isFocus)

    return (
        <Tile
            ref={ref}
            border="2px solid transparent"
            borderColor={isFocus ? "main.500" : "transparent"}
            {...(isActive
                ? {
                      background: "primary.900",
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
