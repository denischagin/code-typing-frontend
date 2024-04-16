import { createContext, useContext } from "react"

import { Flex } from "@chakra-ui/react"

import { PaginationProps } from "@shared/ui/pagination"

export interface PaginationState {
    page: number
    onChangePage: (page: number) => void
    totalPages: number
    isDisabled?: boolean
}

const PaginationContext = createContext<PaginationState | null>(null)

export const usePagination = () => {
    const context = useContext(PaginationContext)
    if (!context) throw new Error("Use pagination context within provider!")
    return context
}

export const Pagination = (props: PaginationProps) => {
    const { page, onChangePage, totalPages, isDisabled, ...flexProps } = props

    return (
        <PaginationContext.Provider value={{ page, onChangePage, totalPages, isDisabled }}>
            <Flex justifyContent="center" overflow="hidden" gap={4} wrap="wrap" {...flexProps} />
        </PaginationContext.Provider>
    )
}
