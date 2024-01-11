import {createEvent, createStore} from "effector";
import {IResultCode} from "@entities/results";

export const eventEndResult = createEvent<{ textSymbolCount: number, endTime: Date, errorsCount: number }>()
export const eventStartResult = createEvent<{ text: string, startTime: Date }>()
export const eventTick = createEvent<{ symbols: number, date: Date }>()

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
    .on(eventTick, (state, {symbols, date}) => {
        if (!state.startTime) return

        const tick = symbols / ((date.valueOf() - state.startTime.valueOf()) / 1000 / 60)

        return ({...state, symbolsPerSecond: [...state.symbolsPerSecond, tick]});
    })
    .on(eventStartResult, (state, {startTime, text}) => ({...state, startTime: startTime, text}))
    .on(eventEndResult, (state, {endTime, textSymbolCount, errorsCount}) => {
        const countSymbols = textSymbolCount
        const resultTimeMs = endTime.valueOf() - (state.startTime?.valueOf() ?? 0)
        const resultTime = new Date(resultTimeMs)
        const resultMinutes = resultTimeMs / 1000 / 60
        const symbolPerMinute = countSymbols / resultMinutes
        // const symbolsTick = [...state.symbolsTick, countSymbols]

        return {...state, endTime, resultTime, symbolPerMinute, errorsCount}

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



