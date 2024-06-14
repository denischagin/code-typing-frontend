import { useMemo } from "react"

export const useSearch = <Item extends object, Value>(
    items: Item[] | undefined,
    value: Value,
    valueSelector: (item: Item) => Value
): Item[] => {
    return useMemo(() => {
        return searchFunction(items, value, valueSelector)
    }, [items, value, valueSelector])
}

export const searchFunction = <Item extends object, Value>(
    items: Item[] | undefined,
    value: Value,
    valueSelector: (item: Item) => Value
): Item[] => {
    if (!items) return []

    return items.filter(item => {
        const valueBySelector = String(valueSelector(item))

        return valueBySelector.trim().toLowerCase().includes(String(value).trim().toLowerCase())
    })
}
