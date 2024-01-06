import {useMethods} from "@shared/libs";
import {useEffect} from "react";

export type TTypingStatus = 'printing' | 'not-started' | 'ended'

export interface UseTypingActionState {
    status: TTypingStatus,
    isPrinting: boolean
    isNotStarted: boolean
    isEnded: boolean
}

export interface UseTypingActionOptions {
    onStart?: () => void,
    onStartEffect?: () => void
    canStart?: boolean,

    onEnd?: () => void
    onEndEffect?: () => void
    canEnd?: boolean

    onReset?: () => void
    canReset?: boolean
}

export const useTypingAction = (options: UseTypingActionOptions) => {
    const {
        onStart,
        onEnd,
        canStart,
        canEnd,
        onReset,
        canReset,
        onEndEffect,
        onStartEffect,
    } = options

    const [state, methods] = useMethods({
        initialState: {
            status: "not-started",
            isEnded: false,
            isNotStarted: true,
            isPrinting: false
        } as UseTypingActionState,
        methods: {
            startTyping: (state) => {
                if (canStart === false) return

                state.status = "printing"
                state.isNotStarted = false
                state.isEnded = false
                state.isPrinting = true

                onStart && onStart()
            },
            endTyping: (state) => {
                if (canEnd === false) return

                state.status = "ended"
                state.isNotStarted = false
                state.isEnded = true
                state.isPrinting = false

                onEnd && onEnd()
            },
            resetTyping: (state) => {
                if (canReset === false) return

                state.status = "not-started"
                state.isEnded = false
                state.isNotStarted = true
                state.isPrinting = false

                onReset && onReset()
            }
        }
    });


    useEffect(() => {
        if (!state.isPrinting) return

        onStartEffect && onStartEffect()
    }, [state.isPrinting]);

    useEffect(() => {
        if (!state.isEnded) return

        onEndEffect && onEndEffect()
    }, [state.isEnded]);

    return {...state, ...methods}
}