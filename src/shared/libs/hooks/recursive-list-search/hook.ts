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
        const searchItems = recursiveListSearchFunction(items, value)
        return searchItems.sort((a, b) => (a.parents?.length ?? 0) - (b.parents?.length ?? 0))
    }, [items, value])
}

const getIsIncludes = (value1: string, value2: string) => {
    return value1.toLowerCase().includes(value2.toLowerCase())
}

export const recursiveListSearchFunction = (
    items: RecursiveListItemType[],
    value: string,
    parents: string[] = []
): RecursiveListItemType[] => {
    return items.flatMap(item => {
        const isIncludes =
            getIsIncludes(item.name, value) ||
            parents?.some(parent => getIsIncludes(parent ?? "", value))
        let childrenList = [] as RecursiveListItemType[]

        if (item.children) {
            childrenList = recursiveListSearchFunction(item.children, value, [
                ...(parents ? parents : []),
                item.name
            ])
        }

        if (!isIncludes) {
            return [...childrenList]
        }

        return [{ ...item, parents }, ...childrenList]
    })
}
