import {TimerDirection} from "@shared/ui/timer";

export type TimerStatus = "stopped" | "started"


export interface TypingCodeTimerStore {
    timerStatus: TimerStatus
    timeMillisecondsStart: number | null
    timeMillisecondsEnd: number | null
    timerSettings: TypingTimerSettings
}

export type TypingTimerSettings = {
    direction: TimerDirection,
    startSeconds: number,
}
