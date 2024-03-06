import {useEffect, useRef, useState} from "react"

import {Text} from "@chakra-ui/react"

import {$timerStore} from "@entities/timer"
import {convertMillisecondsAndDateToTime} from "@shared/libs"
import {useUnit} from "effector-react"

export const Timer = () => {
    const [currentTimeMilliseconds, setCurrentTimeMilliseconds] = useState(0)
    const {timerStatus, timeMillisecondsStart, timeMillisecondsEnd} = useUnit($timerStore)

    const intervalRef = useRef<NodeJS.Timeout | undefined>()

    useEffect(() => {
        if (timerStatus === "started") {
            intervalRef.current = setInterval(() => {
                const dateNow = Date.now()

                setCurrentTimeMilliseconds(dateNow - (timeMillisecondsStart ?? 0))
            }, 30)
        }
        if (timerStatus === "stopped" && !!intervalRef.current) {
            clearInterval(intervalRef.current)
            setCurrentTimeMilliseconds(
                (timeMillisecondsEnd ?? 0) - (timeMillisecondsStart ?? 0))
        }

        return () => clearInterval(intervalRef.current)
    }, [timeMillisecondsEnd, timeMillisecondsStart, timerStatus])

    return (
        <div>
            <Text fontSize="x-large">
                {convertMillisecondsAndDateToTime(currentTimeMilliseconds)}
            </Text>
        </div>
    )
}