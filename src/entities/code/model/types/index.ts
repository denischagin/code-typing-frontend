export interface TimerStore {
    timerStatus: TimerStatus
    timeMillisecondsStart: number | null
    timeMillisecondsEnd: number | null
}

export type TimerStatus = "stopped" | "started"
