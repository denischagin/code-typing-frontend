import {Box} from "@chakra-ui/react"

import {TimerItem, TimerProps} from "@shared/ui/timer";

export const Timer = (props: TimerProps) => {
    const {time} = props

    const date = new Date(time)

    return (
        <Box display="inline-flex" gap={2}>
            <TimerItem time={date.getMinutes()} postfix="m" required={false}/>
            <TimerItem time={date.getSeconds()} postfix="s"/>
        </Box>
    )
}