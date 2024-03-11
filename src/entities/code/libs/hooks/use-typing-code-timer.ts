import {$typingCodeTimerStore, eventResetTimer,eventStartTimer, eventStopTimer} from "@entities/code";
import {useUnit} from "effector-react";

export const useTypingCodeTimer = () => {
    return useUnit({
        timer: $typingCodeTimerStore,
        startTimer: eventStartTimer,
        stopTimer: eventStopTimer,
        resetTimer: eventResetTimer
    })
}
