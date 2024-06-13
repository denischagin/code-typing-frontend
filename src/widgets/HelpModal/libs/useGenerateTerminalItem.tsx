import { useMemo } from "react"

import { useTerminalHandlers } from "@entities/terminal"

export const useGenerateTerminalItem = (onClose: () => void) => {
    const { toggleTerminal } = useTerminalHandlers()

    const terminalItem = useMemo(() => {
        return {
            name: "Terminal",
            action: () => {
                toggleTerminal()
                onClose()
            }
        }
    }, [onClose])

    return terminalItem
}
