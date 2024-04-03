import { useEffect, useRef, useState } from "react"

import { TimerDirection, UseTimerOptions } from "@shared/ui/timer"

export const useTimer = (options: UseTimerOptions) => {
    const { startSeconds, timeout = 20, direction, onEnd } = options

    const [timeMs, setTimeMs] = useState(startSeconds * 1000)
    const [isRunning, setIsRunning] = useState(false)
    const [isEnded, setIsEnded] = useState(false)

    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const intervalByDirection: Record<TimerDirection, (startDate: Date) => NodeJS.Timeout> = {
        down: startDate => {
            return setInterval(() => {
                const now = new Date()
                const newDate = startSeconds * 1000 - (now.getTime() - startDate.getTime())

                if (newDate > 0) return setTimeMs(newDate)

                setTimeMs(0)
                clearInterval(intervalRef.current!)
                setIsRunning(false)
                setIsEnded(true)
                setTimeMs(newDate)
            }, timeout)
        },
        up: startDate => {
            return setInterval(() => {
                const now = new Date()
                setTimeMs(startSeconds * 1000 + (now.getTime() - startDate.getTime()))
            }, timeout)
        }
    }

    useEffect(() => {
        if (isEnded) {
            onEnd && onEnd()
            setIsEnded(false)
        }
    }, [isEnded])

    const start = () => {
        setIsRunning(true)
        const startTimeNow = new Date()

        intervalRef.current = intervalByDirection[direction](startTimeNow)
    }

    const stop = () => {
        clearInterval(intervalRef.current!)
    }

    const reset = () => {
        clearInterval(intervalRef.current!)
        setTimeMs(startSeconds * 1000)
    }

    return { time: timeMs, isRunning, start, stop, reset }
}
