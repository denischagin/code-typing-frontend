import {useMethods} from "@shared/libs";

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

const calculateRowStartIndent = (row?: string) => {
    let indent = 0

    if (row) {
        const startIndexText = row.search(/\S/g)
        indent = startIndexText === -1 ? 0 : startIndexText
    } else
        indent = 0

    return indent
}

const calculateRowRightSymbols = (row: string, typingValue: string) => {
    let currentRowRightSymbols = 0

    const startIndexText = row.search(/\S/g)

    for (let i = startIndexText; i < typingValue.length; i++) {
        if (typingValue[i] === row[i])
            currentRowRightSymbols++
    }

    return currentRowRightSymbols
}

export const useCurrentRowState = (rows: string[] | undefined) => {

    const [state, methods] = useMethods({
        initialState: {
            currentRowIndex: 0,
            typingValue: '',
            prevRowsRightSymbols: 0,
            currentRowRightSymbols: 0,
            errorsCount: 0,
            isError: false
        } as CurrentRowState,
        methods: {
            nextRow: (state) => {
                if (!rows) return
                const nextRow = rows.at(state.currentRowIndex + 1)

                const indent = calculateRowStartIndent(nextRow)

                state.typingValue = " ".repeat(indent)
                state.prevRowsRightSymbols = state.prevRowsRightSymbols + rows[state.currentRowIndex].trimStart().length
                state.currentRowRightSymbols = 0
                state.currentRowIndex = state.currentRowIndex + 1
            },
            setTypingValue: (state, value: string,) => {
                state.typingValue = value

                if (!rows) return
                const currentRow = rows[state.currentRowIndex]

                state.currentRowRightSymbols = calculateRowRightSymbols(currentRow, state.typingValue)
            },
            setValueWithTab: (state, tabWidth = 2) => {
                state.typingValue = " ".repeat(tabWidth) + state.typingValue
            },
            resetState: (state) => {
                state.typingValue = ''
                state.currentRowIndex = 0
                state.prevRowsRightSymbols = 0
                state.currentRowRightSymbols = 0
                state.errorsCount = 0
            },
        },
    })


    return {...state, ...methods}
}