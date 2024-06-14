import { Dispatch, useEffect } from "react"
import { SetStateAction } from "react"
import { useState } from "react"

export const useLocalStorage = <T = string>(
    name: string,
    defaultValue: T,
    parseCallback: (localStorageItem: string, defaultValue: T) => T,
    stringifyCallback: (item: T | null) => string
): [item: T, setItem: Dispatch<SetStateAction<T>>] => {
    const [item, setItem] = useState<T>(() => {
        const itemFromStorage = localStorage.getItem(name)
        if (itemFromStorage === null) {
            return defaultValue
        }
        return parseCallback(itemFromStorage, defaultValue)
    })

    useEffect(() => {
        localStorage.setItem(name, stringifyCallback(item))
    }, [item])

    return [item, setItem]
}

export const parseBoolean = (item: string, defaultValue: boolean) => {
    try {
        const itemParse = JSON.parse(item)
        return typeof itemParse === "boolean" ? itemParse : defaultValue
    } catch (e) {
        return defaultValue
    }
}
