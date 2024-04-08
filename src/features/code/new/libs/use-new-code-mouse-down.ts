import { useEffect } from "react"

import { useTypingCodeHandlers } from "@entities/code"
import { keyboardShortcuts } from "@shared/libs"

export const useNewCodeMouseDown = () => {
    const { handleNewText, inputRef } = useTypingCodeHandlers()

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            keyboardShortcuts<KeyboardEvent>({
                "!Ctrl+Alt+Enter": () => {
                    handleNewText()
                    inputRef?.current?.focus()
                }
            })(e)
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [handleNewText, inputRef])
}
