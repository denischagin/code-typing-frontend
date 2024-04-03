import { FlexProps, ImageProps, TextProps } from "@chakra-ui/react"

export interface TileProps extends FlexProps {
    isActive?: boolean
}

export interface TileTextProps extends TextProps {}

export interface TileImageProps extends ImageProps {}
