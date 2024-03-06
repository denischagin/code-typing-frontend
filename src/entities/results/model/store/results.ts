import {IResult, TResultStore} from "@entities/results";
import {storageKeysEnum} from "@shared/constants";
import {createEvent, createStore} from "effector";

export const eventAddResult = createEvent<IResult>()

const loadResultsToLocalStorage = (state: TResultStore | null) => {
    if (!state) return

    localStorage.setItem(storageKeysEnum.results, JSON.stringify(state))
}

const loadResultsFromLocalStorage = (): TResultStore | null => {
    const preloadResultsString = localStorage.getItem(storageKeysEnum.results)
    return preloadResultsString ? JSON.parse(preloadResultsString) : null
}


export const $resultsStore = createStore<TResultStore | null>(loadResultsFromLocalStorage())

$resultsStore
    .on(eventAddResult, (state, payload) =>
        state ? [...state, payload] : [payload])
$resultsStore.watch((state) => {
    loadResultsToLocalStorage(state)
})