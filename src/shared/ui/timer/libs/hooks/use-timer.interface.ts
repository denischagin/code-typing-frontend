export interface UseTimerReturn {
    start: () => void,
    reset: () => void,
    stop: () => void,
    timeMs: number,
    onStop: () => void,
}

export interface UseTimerOptions {
    startSeconds: number,
    direction: TimerDirection,
    timeout?: number
    onEnd?: () => void
}

export type TimerDirection = 'up' | 'down'
