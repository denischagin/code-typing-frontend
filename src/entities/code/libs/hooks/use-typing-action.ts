import { useMethods } from "@shared/libs"

export type TTypingStatus = "printing" | "not-started" | "ended"

export interface UseTypingActionState {
    status: TTypingStatus
    isPrinting: boolean
    isNotStarted: boolean
    isEnded: boolean
}

export const useTypingAction = () => {
    const [state, methods] = useMethods({
        initialState: {
            status: "not-started",
            isEnded: false,
            isNotStarted: true,
            isPrinting: false
        } as UseTypingActionState,
        methods: {
            startTyping: state => {
                state.status = "printing"
                state.isNotStarted = false
                state.isEnded = false
                state.isPrinting = true
            },
            endTyping: state => {
                state.status = "ended"
                state.isNotStarted = false
                state.isEnded = true
                state.isPrinting = false
            },
            resetTyping: state => {
                state.status = "not-started"
                state.isEnded = false
                state.isNotStarted = true
                state.isPrinting = false
            }
        }
    })

    return { ...state, ...methods }
}
