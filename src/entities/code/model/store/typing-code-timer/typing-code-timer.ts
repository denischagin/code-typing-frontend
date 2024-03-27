import {TypingCodeTimerStore, TypingTimerSettings} from "@entities/code";
import {storageKeysEnum} from "@shared/constants";
import {createEvent, createStore} from "effector";


export const counterDownVariants = [15, 30, 60]
export const eventStartTimer = createEvent<number>()
export const eventStopTimer = createEvent<number>()
export const eventResetTimer = createEvent()
export const eventChangeTimerSettings = createEvent<TypingTimerSettings>()



const loadSettingsFromLocalStorage = (): TypingTimerSettings => {
    const timerDirection = localStorage.getItem(storageKeysEnum.timerDirection);
    const startSeconds = localStorage.getItem(storageKeysEnum.timerStartSeconds);

    const initSettings: TypingTimerSettings = {
        direction: "down",
        startSeconds: counterDownVariants[1]
    }

    if (timerDirection && startSeconds) {
        if (timerDirection === 'up') {
            initSettings.direction = 'up'
            initSettings.startSeconds = 0
        } else if (timerDirection === 'down' && counterDownVariants.includes(Number(startSeconds))) {
            initSettings.direction = 'down'
            initSettings.startSeconds = Number(startSeconds)
        }
    }

    return initSettings
}


export const $typingCodeTimerStore = createStore<TypingCodeTimerStore>({
    timerStatus: "stopped",
    timeMillisecondsStart: null,
    timeMillisecondsEnd: null,
    timerSettings: loadSettingsFromLocalStorage()
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

$typingCodeTimerStore.watch(store => {
    localStorage.setItem(storageKeysEnum.timerDirection, store.timerSettings.direction);
    localStorage.setItem(storageKeysEnum.timerStartSeconds, store.timerSettings.startSeconds.toString());
});

