import {Text} from "@chakra-ui/react"

import {convertMillisecondsAndDateToTime} from "@shared/libs"
import {TimerProps} from "@shared/ui/timer";

export const Timer = (props: TimerProps) => {
    const {time} = props

    return (
        <div>
            <Text fontSize="x-large">
                {convertMillisecondsAndDateToTime(time)}
            </Text>
        </div>
    )
}