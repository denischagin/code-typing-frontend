import { createStore, createEvent } from "effector";
import { ITimerStore } from "../types";

export const eventStartTimer = createEvent()
export const eventStopTimer = createEvent()
export const eventResetTimer = createEvent()

export const $timerStore = createStore<ITimerStore>({
    timerStatus: "stopped",
    timeMillisecondsStart: null,
    timeMillisecondsEnd: null,
})
    .on(eventStartTimer, () => ({ 
        timerStatus: "started",
        timeMillisecondsStart: Date.now(), 
        timeMillisecondsEnd: null 
    }))
    .on(eventStopTimer, (store) => ({
        timerStatus: "stopped", 
        timeMillisecondsStart: store.timeMillisecondsStart, 
        timeMillisecondsEnd: Date.now()
    }))
    .on(eventResetTimer, () => ({
        timerStatus: "stopped",
        timeMillisecondsStart: null, 
        timeMillisecondsEnd: null,
    }))
