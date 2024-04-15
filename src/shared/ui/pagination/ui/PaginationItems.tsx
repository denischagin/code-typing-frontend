import { Flex } from "@chakra-ui/react"

import { PaginationItem, usePagination } from "@shared/ui/pagination"

export const PaginationItems = (props: { items: number[] }) => {
    const { items } = props
    const { onChangePage, page } = usePagination()

    return (
        <Flex gap={1} minW="400px" justify="center" flexGrow={1}>
            {items.map(item => (
                <PaginationItem
                    key={item}
                    isActive={page === item}
                    onClick={() => onChangePage(item)}
                >
                    {item}
                </PaginationItem>
            ))}
        </Flex>
    )
}
