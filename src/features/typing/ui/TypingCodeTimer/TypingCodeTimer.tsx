import {useEffect} from "react";

import {TimerStatus, useTypingCodeTimer} from "@entities/code";
import {Timer, useTimer} from "@shared/ui/timer";

export const TypingCodeTimer = () => {
    const {
        timer: {
            timerStatus,
            timerSettings
        },
        stopTimer
    } = useTypingCodeTimer()

    const {start, time, reset} = useTimer({
        onEnd: () => {
            stopTimer(Date.now())
        },
        startSeconds: timerSettings.direction === "down" ? timerSettings.startSeconds : 0,
        direction: timerSettings.direction
    })

    useEffect(() => {
        const handlerByTimerStatus: Record<TimerStatus, () => void> = {
            started: () => start(),
            stopped: () => reset(),
        }
        handlerByTimerStatus[timerStatus]()
    }, [timerStatus])

    return (
        <Timer time={time}/>
    )
}