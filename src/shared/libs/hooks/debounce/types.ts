export type UnknownFunction = (...args: never[]) => void

export type UseDebounceReturnFunction<FunctionType extends UnknownFunction> = (
    ...args: Parameters<FunctionType>
) => void
