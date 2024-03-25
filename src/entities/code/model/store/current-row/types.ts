export interface CurrentRowState {
    currentRowIndex: number,
    typingValue: string,
    prevRowsRightSymbols: number,
    currentRowRightSymbols: number
    errorsCount: number
    isError: boolean
}

export interface CurrentRowMethods {
    nextRow: () => void
    setTypingValue: (value: string) => void
    setValueWithTab: (tabWidth?: number) => void
    resetState: () => void
}
