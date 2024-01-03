import {useMemo} from "react";

export const useSearch = <Item extends object, Value>(
    items: Item[] | undefined,
    value: Value,
    valueSelector: (item: Item) => Value
): Item[] | undefined => {

    return useMemo(() => {
        if (!items) return undefined

        return items.filter((item) => {
            const valueBySelector = String(valueSelector(item))

            return valueBySelector.trim().toLowerCase().includes(String(value).trim().toLowerCase())
        })
    }, [items, value, valueSelector])
}