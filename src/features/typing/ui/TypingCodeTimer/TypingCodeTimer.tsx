import { useEffect } from "react"

import { TimerStatus, useTypingCodeHandlers, useTypingCodeTimer } from "@entities/code"
import { Timer, useTimer } from "@shared/ui/timer"

export const TypingCodeTimer = () => {
    const {
        timer: { timerStatus, timerSettings }
    } = useTypingCodeTimer()
    const { endTyping, resetTyping } = useTypingCodeHandlers()

    const { start, time, reset } = useTimer({
        onEnd: () => endTyping(),
        startSeconds: timerSettings.direction === "down" ? timerSettings.startSeconds : 0,
        direction: timerSettings.direction
    })

    useEffect(() => {
        resetTyping()
        reset()
    }, [timerSettings.startSeconds])

    useEffect(() => {
        const handlerByTimerStatus: Record<TimerStatus, () => void> = {
            started: () => start(),
            stopped: () => reset()
        }
        handlerByTimerStatus[timerStatus]()
    }, [timerStatus])

    return <Timer time={time} />
}
