import { useMemo } from "react"

import { recursiveListSearchFunction } from "@shared/libs/hooks/recursive-list-search"
import { searchFunction } from "@shared/libs/hooks/search"
import { RecursiveListItemType } from "@shared/types"

export const useHelpModalSearch = (
    items: RecursiveListItemType[],
    value: string,
    isAllSearch: boolean
) => {
    return useMemo(() => {
        if (value === "") {
            return items
        }
        if (isAllSearch) {
            const searchItems = recursiveListSearchFunction(items, value)
            return searchItems.sort(
                (a, b) => (a.parentName?.length ?? 0) - (b.parentName?.length ?? 0)
            )
        }
        return searchFunction(items, value, item => item.name)
    }, [isAllSearch, value, items])
}
