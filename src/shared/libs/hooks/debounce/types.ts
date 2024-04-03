export type UnknownFunction = (...args: unknown[]) => void

export type UseDebounceReturnFunction<FunctionType extends UnknownFunction> =
    (...args: Parameters<FunctionType>) => void
