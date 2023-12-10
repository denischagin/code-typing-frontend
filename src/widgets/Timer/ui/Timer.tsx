import {Text} from "@chakra-ui/react"
import {$timerStore} from "@entities/timer"
import {convertMillisecondsToTime} from "@shared/libs"
import {useUnit} from "effector-react"
import {useEffect, useState} from "react"

export const Timer = () => {
    const [currentTimeMilliseconds, setCurrentTimeMilliseconds] = useState(0)
    const {timerStatus, timeMillisecondsStart, timeMillisecondsEnd} = useUnit($timerStore)

    useEffect(() => {
        let interval: NodeJS.Timeout

        if (timerStatus === "started") {
            interval = setInterval(() => {
                const dateNow = Date.now()

                setCurrentTimeMilliseconds(dateNow - (timeMillisecondsStart ?? 0))
            }, 30)
        }
        if (timerStatus === "stopped") {
            setCurrentTimeMilliseconds(
                (timeMillisecondsEnd ?? 0) - (timeMillisecondsStart ?? 0))
        }

        return () => clearInterval(interval)
    }, [timeMillisecondsEnd, timeMillisecondsStart, timerStatus])

    return (
        <div>
            <Text fontSize="x-large">
                {convertMillisecondsToTime(currentTimeMilliseconds)}
            </Text>
        </div>
    )
}