import {ICursorPosition} from "..";
import {createStore} from "effector";
import {createEvent} from "effector/compat";

export const eventChangePosition = createEvent<ICursorPosition>()

export const $storeCursorPosition = createStore<ICursorPosition>({
    left: 0,
    top: 0,
})
    .on(eventChangePosition, (_, newPosition) => {
        return newPosition
    })

