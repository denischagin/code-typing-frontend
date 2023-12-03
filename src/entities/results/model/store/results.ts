import {createEvent, createStore} from "effector";
import {IResult, TResultStore} from "@entities/results/model/types/store.ts";

export const eventAddResult = createEvent<IResult>()

export const $resultsStore = createStore<TResultStore | null>(null)

$resultsStore
    .on(eventAddResult, (state, payload) =>
        state ? [...state, payload] : [payload])