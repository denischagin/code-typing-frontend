import {useMethods} from "@shared/libs";

export interface ICurrentRowState {
    currentRowIndex: number,
    typingValue: string,
    prevRowsRightSymbols: number,
    currentRowRightSymbols: number
}

export interface ICurrentRowMethods {
    nextRow: () => void
    setTypingValue: (value: string) => void
    setValueWithTab: (tabWidth?: number) => void
    resetState: () => void
}

export const useCurrentRowState = (rows: string[] | undefined) => {
    const [state, methods] = useMethods({
        initialState: {
            currentRowIndex: 0,
            typingValue: '',
            prevRowsRightSymbols: 0,
            currentRowRightSymbols: 0
        } as ICurrentRowState,
        methods: {
            nextRow: (state) => {
                if (!rows) return
                const nextRow = rows[state.currentRowIndex + 1]

                let indent = 0

                if (nextRow) {
                    const startIndexText = nextRow.search(/\S/g)
                    indent = startIndexText === -1 ? 0 : startIndexText
                } else
                    indent = 0

                state.typingValue = " ".repeat(indent) + ''
                state.prevRowsRightSymbols = state.prevRowsRightSymbols + rows[state.currentRowIndex].trimStart().length
                state.currentRowRightSymbols = 0
                state.currentRowIndex = state.currentRowIndex + 1
            },
            setTypingValue: (state, value: string,) => {
                state.typingValue = value

                if (!rows) return
                const currentRow = rows[state.currentRowIndex]
                let currentRowRightSymbols = 0

                const startIndexText = currentRow.search(/\S/g)

                for (let i = startIndexText; i < state.typingValue.length; i++) {
                    if (state.typingValue[i] === currentRow[i])
                        currentRowRightSymbols++
                }
                state.currentRowRightSymbols = currentRowRightSymbols
            },
            setValueWithTab: (state, tabWidth = 2) => {
                state.typingValue = " ".repeat(tabWidth) + state.typingValue
            },
            resetState: (state) => {
                state.typingValue = ''
                state.currentRowIndex = 0
                state.prevRowsRightSymbols = 0
                state.currentRowRightSymbols = 0
            }
        },
    })


    return {...state, ...methods}
}