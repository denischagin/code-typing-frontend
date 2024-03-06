import {$timerStore, eventResetTimer, eventStartTimer, eventStopTimer} from "@entities/timer";
import {useUnit} from "effector-react";

export const useTimer = () => {
    return useUnit({
        timer: $timerStore,
        startTimer: eventStartTimer,
        stopTimer: eventStopTimer,
        resetTimer: eventResetTimer
    })
}
