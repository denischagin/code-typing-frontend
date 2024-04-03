import { useUnit } from "effector-react"

import {
    $typingCodeTimerStore,
    eventChangeTimerSettings,
    eventResetTimer,
    eventStartTimer,
    eventStopTimer
} from "@entities/code"

export const useTypingCodeTimer = () => {
    return useUnit({
        timer: $typingCodeTimerStore,
        startTimer: eventStartTimer,
        stopTimer: eventStopTimer,
        resetTimer: eventResetTimer,
        changeTimerSetting: eventChangeTimerSettings
    })
}
