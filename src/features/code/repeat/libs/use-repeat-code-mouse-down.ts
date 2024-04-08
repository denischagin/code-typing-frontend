import { useEffect } from "react"

import { useTypingCodeHandlers } from "@entities/code"
import { keyboardShortcuts } from "@shared/libs"

export const useRepeatCodeMouseDown = () => {
    const { resetTyping, inputRef } = useTypingCodeHandlers()

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            keyboardShortcuts({
                "Ctrl+Alt+Enter": () => {
                    resetTyping()
                    inputRef?.current?.focus()
                }
            })(e)
        }
        document.addEventListener("keydown", handleKeyDown)

        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [inputRef, resetTyping])
}
