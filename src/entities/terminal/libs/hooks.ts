import { useEffect } from "react"

import { useTerminalHandlers } from "@entities/terminal"

export const useTerminalKeyDown = () => {
    const { toggleTerminal } = useTerminalHandlers()

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.key === "`" && e.ctrlKey) || (e.altKey && e.key === "F12")) {
                toggleTerminal()
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [])
}
