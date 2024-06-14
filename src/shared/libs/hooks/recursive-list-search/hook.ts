import { useMemo } from "react"

import { RecursiveListItemType } from "@shared/types"

export const useRecursiveListSearch = (
    items: RecursiveListItemType[],
    value: string
): RecursiveListItemType[] => {
    return useMemo(() => {
        if (value === "") {
            return items
        }
        const searchItems = recursiveListSearch(items, value)
        return searchItems.sort((a, b) => (a.parentName?.length ?? 0) - (b.parentName?.length ?? 0))
    }, [items, value])
}

const recursiveListSearch = (
    items: RecursiveListItemType[],
    value: string,
    parentName?: string
): RecursiveListItemType[] => {
    const filterItems = items.flatMap(item => {
        const isIncludes = item.name.toLowerCase().includes(value.toLowerCase())
        let childrenList = [] as RecursiveListItemType[]
        if (item.children) {
            childrenList = recursiveListSearch(item.children, value, item.name)
        }
        if (!isIncludes) return [...childrenList]
        return [{ ...item, parentName }, ...childrenList]
    })
    if (value !== "") return filterItems
    return filterItems
}
