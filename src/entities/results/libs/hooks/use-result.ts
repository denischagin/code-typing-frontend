import {useUnit} from "effector-react";

import {$resultStore, eventClearResult, eventEndResult, eventStartResult, eventTick} from "@entities/results";

export const useResult = () => {
    return useUnit({
        result: $resultStore,
        startResult: eventStartResult,
        endResult: eventEndResult,
        tickResult: eventTick,
        clearResult: eventClearResult
    })

}