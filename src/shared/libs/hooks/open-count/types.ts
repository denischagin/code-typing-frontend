export type UseOpenCountReturn<T> = [
    items: T[],
    { handleOpenCount: () => void, openCount: number, isLastItem: boolean }
]