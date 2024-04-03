import { FlexProps } from "@chakra-ui/react"

export type AsideTabName = number | string

export interface AsideProps extends FlexProps {
    currentTabName: AsideTabName | null
    onChangeTabName?: (name: AsideTabName | null) => void
}

export interface AsideState {
    currentTabName: AsideTabName | null
    onChangeTabName: ((index: AsideTabName | null) => void) | null
}
