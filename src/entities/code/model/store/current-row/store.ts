import {createEvent, createStore} from 'effector';
import {useUnit} from "effector-react";

import {CurrentRowState} from "@entities/code";


const calculateRowStartIndent = (row?: string) => {
    if (!row) return 0

    const startIndexText = row.search(/\S/g)
    return startIndexText === -1 ? 0 : startIndexText
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

const eventNextRow = createEvent<string[] | undefined>()
const eventSetTypingValue = createEvent<{ value: string, rows?: string[] }>()
const eventSetValueWithTab = createEvent()
const eventResetState = createEvent()


const initialState: CurrentRowState = {
    currentRowIndex: 0,
    typingValue: '',
    prevRowsRightSymbols: 0,
    currentRowRightSymbols: 0,
    errorsCount: 0,
    isError: false
};

const $currentRow = createStore<CurrentRowState>(initialState)
    .on(eventNextRow, (state, rows) => {
        if (!rows) return state

        const nextRow = rows.at(state.currentRowIndex + 1)

        const indent = calculateRowStartIndent(nextRow)

        return {
            ...state,
            typingValue: " ".repeat(indent),
            prevRowsRightSymbols: state.prevRowsRightSymbols + rows[state.currentRowIndex].trimStart().length,
            currentRowRightSymbols: 0,
            currentRowIndex: state.currentRowIndex + 1

        }
    })
    .on(eventSetTypingValue, (state, {value, rows}) => {
        if (!rows)
            return {
                ...state,
                typingValue: value
            }
        const currentRow = rows[state.currentRowIndex]

        return {
            ...state,
            currentRowRightSymbols: calculateRowRightSymbols(currentRow, state.typingValue),
            typingValue: value
        }
    })
    .on(eventSetValueWithTab, (state) => {
        return {
            ...state,
            typingValue: " ".repeat(2) + state.typingValue
        }
    })
    .on(eventResetState, (state) => {
        return {
            ...state,
            typingValue: '',
            currentRowIndex: 0,
            prevRowsRightSymbols: 0,
            currentRowRightSymbols: 0,
            errorsCount: 0,
            isError: false
        }
    })

export const useCurrentRow = () => useUnit($currentRow)
export const useCurrentRowHandlers = () => useUnit({
    nextRow: eventNextRow,
    setTypingValue: eventSetTypingValue,
    setValueWithTab: eventSetValueWithTab,
    resetState: eventResetState
})
