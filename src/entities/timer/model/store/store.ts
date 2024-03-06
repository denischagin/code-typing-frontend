import {ITimerStore} from "../types";
import {createEvent,createStore} from "effector";

export const eventStartTimer = createEvent<number>()
export const eventStopTimer = createEvent<number>()
export const eventResetTimer = createEvent()

export const $timerStore = createStore<ITimerStore>({
    timerStatus: "stopped",
    timeMillisecondsStart: null,
    timeMillisecondsEnd: null,
})
    .on(eventStartTimer, (_store, startTimeMilliseconds) => ({
        timerStatus: "started",
        timeMillisecondsStart: startTimeMilliseconds,
        timeMillisecondsEnd: null
    }))
    .on(eventStopTimer, (store, stopTimeMilliseconds) => ({
        timerStatus: "stopped",
        timeMillisecondsStart: store.timeMillisecondsStart,
        timeMillisecondsEnd: stopTimeMilliseconds
    }))
    .on(eventResetTimer, () => ({
        timerStatus: "stopped",
        timeMillisecondsStart: null,
        timeMillisecondsEnd: null,
    }))
