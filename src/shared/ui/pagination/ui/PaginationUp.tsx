import { PaginationItem, PaginationPanel, PaginationUpProps } from "@shared/ui/pagination"

export const PaginationUp = (props: PaginationUpProps) => {
    const { onChangePage, page, totalPages } = props

    const disabledItems = page === totalPages - 1

    const handleLastPage = () => {
        if (!disabledItems) onChangePage(totalPages - 1)
    }

    const handleNextPage = () => {
        if (!disabledItems) onChangePage(page + 1)
    }

    const upItems = [
        { text: "i++", handler: handleNextPage },
        { text: "i = length - 1", handler: handleLastPage }
    ]

    return (
        <PaginationPanel>
            {upItems.map(({ text, handler }, index) => (
                <PaginationItem
                    key={text}
                    px="30px"
                    borderRadius={0}
                    borderLeft={"1px solid"}
                    borderColor={index !== 0 ? "main.500" : "transparent"}
                    onClick={handler}
                >
                    {text}
                </PaginationItem>
            ))}
        </PaginationPanel>
    )
}
