export interface PaginationUpProps {
    page?: number
    onChangePage?: (page: number) => void
    totalPages?: number
}

export interface PaginationDownProps {
    page?: number
    onChangePage?: (page: number) => void
    totalPages?: number
}
