import { createStore } from "effector";
import { ICursorPosition } from "..";
import { createEvent } from "effector/compat";

export const eventChangePosition = createEvent<{ top: number, left: number }>()

export const $storeCursorPosition = createStore<ICursorPosition>({
    left: 0,
    top: 0,
})
    .on(eventChangePosition, (_, newPosition) => {
        console.log(newPosition)
        return newPosition
    })