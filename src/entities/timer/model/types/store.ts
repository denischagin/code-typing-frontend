export interface ITimerStore {
    timerStatus: TTimerStatus
    timeMillisecondsStart: number | null
    timeMillisecondsEnd: number | null
}

export type TTimerStatus = "stopped" | "started"