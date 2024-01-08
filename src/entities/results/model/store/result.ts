import {createEvent, createStore} from "effector";
import {IResultCode} from "@entities/results";

export const eventEndResult = createEvent<{ textSymbolCount: number, endTime: number }>()
export const eventStartResult = createEvent<{ text: string, startTime: number }>()
export const eventTick = createEvent<{ symbols: number, msDate: number }>()

export const eventClearResult = createEvent()


export const $resultStore = createStore<IResultCode>({
    text: null,
    symbolPerMinute: null,
    startTime: null,
    endTime: null,
    resultTime: null,
    symbolsPerSecond: [],
    accuracy: null,
    errorsCount: null
})

$resultStore
    .on(eventTick, (state, {symbols, msDate}) => {
        if (!state.startTime) return
        const tick = symbols / ((msDate - state.startTime) / 1000 / 60)

        return ({...state, symbolsPerSecond: [...state.symbolsPerSecond, tick]});
    })
    .on(eventStartResult, (state, {startTime, text}) => ({...state, startTime, text}))
    .on(eventEndResult, (state, {endTime, textSymbolCount}) => {
        const countSymbols = textSymbolCount
        const resultTime = endTime - (state.startTime ?? 0)
        const resultMinutes = resultTime / 1000 / 60
        const symbolPerMinute = countSymbols / resultMinutes
        // const symbolsTick = [...state.symbolsTick, countSymbols]

        return {...state, endTime, resultTime, symbolPerMinute,}

    })
    .on(eventClearResult, () => ({
        text: null,
        symbolPerMinute: null,
        startTime: null,
        endTime: null,
        resultTime: null,
        symbolsPerSecond: [],
        errorsCount: null,
        accuracy: null
    }))


// $resultStore.watch((state) => {
//     console.log(state)
// })



