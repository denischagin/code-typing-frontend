import { useMemo } from "react"

import { RecursiveListItemType } from "@shared/types"

export const useRecursiveListSearch = (
    items: RecursiveListItemType[],
    value: string
): RecursiveListItemType[] => {
    return useMemo(() => recursiveListSearch(items, value), [items, value])
}

const recursiveListSearch = (
    items: RecursiveListItemType[],
    value: string
): RecursiveListItemType[] => {
    return items.filter(item => {
        const isIncludes = item.name.toLowerCase().includes(value.toLowerCase())
        if (item.children) {
            return !!recursiveListSearch(item.children, value).length || isIncludes
        }
        return isIncludes
    })
}
