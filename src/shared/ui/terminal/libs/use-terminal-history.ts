import { Dispatch, SetStateAction, useEffect, useState } from "react"

import { CommandsEnum } from "@shared/ui/terminal/types"

export const useTerminalHistory = (
    terminalCommands: string[],
    onChangeValue: Dispatch<SetStateAction<string>>
) => {
    const [terminalHistory, setTerminalHistory] = useState<string[]>([CommandsEnum.help])
    const [historyIndex, setHistoryIndex] = useState<number>(terminalCommands.length)

    const handleAddHistory = (value: string) => {
        setTerminalHistory(prev => [...prev, value])
    }

    const handleHistoryUp = () => {
        if (historyIndex <= 0) return

        onChangeValue(terminalHistory[historyIndex - 1])
        setHistoryIndex(prev => prev - 1)
    }

    const handleHistoryDown = () => {
        if (historyIndex >= terminalHistory.length - 1) {
            onChangeValue("")
            return setHistoryIndex(terminalHistory.length)
        }

        onChangeValue(terminalHistory[historyIndex + 1])
        setHistoryIndex(prev => prev + 1)
    }

    useEffect(() => {
        setHistoryIndex(terminalHistory.length)
    }, [terminalHistory])

    return {
        handleAddHistory,
        handleHistoryUp,
        handleHistoryDown,
        terminalHistory,
        historyIndex,
        setHistoryIndex
    }
}
