import {TypingCodeTimerStore, TypingTimerSettings} from "@entities/code";
import {createEvent, createStore} from "effector";

export const eventStartTimer = createEvent<number>()
export const eventStopTimer = createEvent<number>()
export const eventResetTimer = createEvent()
export const eventChangeTimerSettings = createEvent<TypingTimerSettings>()


export const $typingCodeTimerStore = createStore<TypingCodeTimerStore>({
    timerStatus: "stopped",
    timeMillisecondsStart: null,
    timeMillisecondsEnd: null,
    timerSettings: {
        direction: "down",
        startSeconds: 30
    }
})
    .on(eventStartTimer, (store, startTimeMilliseconds) => ({
        ...store,
        timerStatus: "started",
        timeMillisecondsStart: startTimeMilliseconds,
        timeMillisecondsEnd: null,
    }))
    .on(eventStopTimer, (store, stopTimeMilliseconds) => ({
        ...store,
        timerStatus: "stopped",
        timeMillisecondsStart: store.timeMillisecondsStart,
        timeMillisecondsEnd: stopTimeMilliseconds,
    }))
    .on(eventResetTimer, (store) => ({
        ...store,
        timerStatus: "stopped",
        timeMillisecondsStart: null,
        timeMillisecondsEnd: null,
    }))
    .on(eventChangeTimerSettings, (store, settings) => ({
        ...store,
        timerSettings: settings
    }))

