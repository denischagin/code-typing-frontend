import { FlexProps, TextProps } from "@chakra-ui/react"

export interface CodeLoadingProps extends FlexProps {}

export interface CodeLoadingProgressProps extends TextProps {
    maxLoadingCount?: number
    delay?: number
    symbol?: string
    emptySymbol?: string
    title?: string
    onSuccess?: () => void
}

export interface CodeLoadingTitleProps extends TextProps {
    title?: string
}
