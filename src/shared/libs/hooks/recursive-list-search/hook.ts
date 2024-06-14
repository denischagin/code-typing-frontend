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

const getIsIncludes = (value1: string, value2: string) => {
    return value1.toLowerCase().includes(value2.toLowerCase())
}

const recursiveListSearch = (
    items: RecursiveListItemType[],
    value: string,
    parentName?: string
): RecursiveListItemType[] => {
    return items.flatMap(item => {
        const isIncludes = getIsIncludes(item.name, value) || getIsIncludes(parentName ?? "", value)
        let childrenList = [] as RecursiveListItemType[]

        if (item.children) {
            childrenList = recursiveListSearch(item.children, value, item.name)
        }

        if (!isIncludes) {
            return [...childrenList]
        }

        return [{ ...item, parentName }, ...childrenList]
    })
}
