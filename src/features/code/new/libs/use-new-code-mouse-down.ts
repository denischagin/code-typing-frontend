import { useEffect } from "react"

import { useTypingCodeHandlers } from "@entities/code"

export const useNewCodeMouseDown = () => {
    const { handleNewText, inputRef } = useTypingCodeHandlers()

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Enter" && e.altKey && !e.ctrlKey) {
                handleNewText()
                inputRef?.current?.focus()
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [handleNewText, inputRef])
}
