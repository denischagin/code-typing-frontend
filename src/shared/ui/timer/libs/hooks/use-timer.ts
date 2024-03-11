import {useRef, useState} from "react";

import {TimerDirection, UseTimerOptions} from "@shared/ui/timer";

const defaultOptions: Required<UseTimerOptions> = {
    direction: "down",
    timeout: 20,
    startSeconds: 30,
    onEnd: () => {
    },
}

export const useTimer = (options: UseTimerOptions = defaultOptions) => {
    const {
        startSeconds = defaultOptions.startSeconds,
        timeout = defaultOptions.timeout,
        direction = defaultOptions.direction,
        onEnd = defaultOptions.onEnd,
    } = options

    const [timeMs, setTimeMs] = useState(startSeconds * 1000);
    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const intervalByDirection: Record<TimerDirection, (startDate: Date) => NodeJS.Timeout> = {
        down: (startDate) => {
            return setInterval(() => {
                const now = new Date();
                const newDate = startSeconds * 1000 - (now.getTime() - startDate.getTime())
                if (newDate <= 0) {
                    setTimeMs(0)
                    clearInterval(intervalRef.current!);
                    return onEnd()
                }
                setTimeMs(newDate);
            }, timeout);
        },
        up: (startDate) => {
            return setInterval(() => {
                const now = new Date();
                setTimeMs(
                    startSeconds * 1000 + (now.getTime() - startDate.getTime())
                );
            }, timeout)
        }
    }


    const start = () => {
        setIsRunning(true);
        const startTimeNow = new Date();

        intervalRef.current = intervalByDirection[direction](startTimeNow);

        return () => clearInterval(intervalRef.current!);
    };

    const stop = () => {
        clearInterval(intervalRef.current!);
    };

    const reset = () => {
        clearInterval(intervalRef.current!);
        setTimeMs(startSeconds * 1000);
    };

    return {time: timeMs, isRunning, start, stop, reset};
}