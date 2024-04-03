import { useState } from "react"

import { UseOpenCountReturn } from "@shared/libs/hooks/open-count/types.ts"

export const useOpenCount = <T>(items: T[]): UseOpenCountReturn<T> => {
    const [openCount, setOpenCount] = useState(1)

    const handleOpenCount = () => {
        setOpenCount(prevCount => prevCount + 1)
    }

    const isLastItem = items.length === openCount

    return [items.slice(0, openCount), { handleOpenCount, openCount, isLastItem }]
}
