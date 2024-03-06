import {$resultStore, eventClearResult, eventEndResult, eventStartResult, eventTick} from "@entities/results";
import {useUnit} from "effector-react";

export const useResult = () => {
    return useUnit({
        result: $resultStore,
        startResult: eventStartResult,
        endResult: eventEndResult,
        tickResult: eventTick,
        clearResult: eventClearResult
    })

}