import {useEffect} from "react";

import {useTypingCodeHandlers} from "@entities/code";

export const useRepeatCodeMouseDown = () => {
    const {resetTyping, inputRef} = useTypingCodeHandlers()

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.altKey && e.code === "Enter" && e.ctrlKey) {
                resetTyping()
                inputRef?.current?.focus()
            }
        }
        window.addEventListener("keydown", handleKeyDown)

        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [inputRef, resetTyping]);
}