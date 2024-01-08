export interface ICodeErrorsContext {
    isError: boolean
    errorsCount: number
    incrementErrors: () => void
    setIsError: (isError: boolean) => void
}