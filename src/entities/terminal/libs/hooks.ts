import { useEffect } from "react"

import { useTerminalHandlers } from "@entities/terminal"
import { keyboardShortcuts } from "@shared/libs"

export const useTerminalKeyDown = () => {
    const { toggleTerminal } = useTerminalHandlers()

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            keyboardShortcuts({
                "`+Ctrl": toggleTerminal,
                "F12+Alt": toggleTerminal
            })(e)
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [])
}
