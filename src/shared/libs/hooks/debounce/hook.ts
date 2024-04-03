import { useRef } from "react"

import { UnknownFunction, UseDebounceReturnFunction } from "./types.ts"

export const useDebounce = <FunctionType extends UnknownFunction>(
    debounceFunction: FunctionType,
    ms: number = 400
): UseDebounceReturnFunction<FunctionType> => {
    const timeout = useRef<NodeJS.Timeout | undefined>(undefined)

    return (...args) => {
        clearTimeout(timeout.current)

        timeout.current = setTimeout(() => {
            debounceFunction(...args)
        }, ms)
    }
}
