export const getPaginationItems = (
    totalPages: number,
    page: number,
    size: number = 5
): number[] => {
    const itemsLength = totalPages > size ? 5 : totalPages
    const indent = Math.floor(size / 2)

    if (page < indent) return Array.from({ length: itemsLength }).map((_, index) => index)

    if (page > totalPages - indent - 1)
        return Array.from({ length: itemsLength }).map(
            (_, index) => totalPages - itemsLength + index
        )

    return Array.from({
        length: itemsLength
    }).map((_, index) => index + page - indent)
}
