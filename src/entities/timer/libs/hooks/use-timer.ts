import {useUnit} from "effector-react";
import {$timerStore, eventResetTimer, eventStartTimer, eventStopTimer} from "@entities/timer";

export const useTimer = () => {
    return useUnit({
        timer: $timerStore,
        startTimer: eventStartTimer,
        stopTimer: eventStopTimer,
        resetTimer: eventResetTimer
    })
}
