import { FlexProps } from "@chakra-ui/react"

export interface PaginationProps extends FlexProps {
    page: number
    onChangePage: (page: number) => void
    totalPages: number
    isDisabled?: boolean
}

export interface PaginationItemProps extends FlexProps {
    isActive?: boolean
    isDisabled?: boolean
}
