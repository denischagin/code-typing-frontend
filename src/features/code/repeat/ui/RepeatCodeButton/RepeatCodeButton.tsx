import { IconButton, Tooltip } from "@chakra-ui/react"

import { useTypingCodeHandlers } from "@entities/code"
import { RefreshIcon } from "@shared/ui/icons"

export const RepeatCodeButton = () => {
    const { scrollTo, containerRef, resetTyping, inputRef } = useTypingCodeHandlers()

    const handleRepeat = () => {
        resetTyping()
        inputRef?.current?.focus()
    }
    const handleRepeatText = () => {
        if (containerRef.current?.scrollTop === 0) {
            return handleRepeat()
        }

        scrollTo({ top: 0, behavior: "smooth" }, () => {
            handleRepeat()
        })
    }

    return (
        <Tooltip label="Repeat text (Ctrl+Alt+Enter)">
            <IconButton
                aria-label={"refresh content"}
                icon={<RefreshIcon />}
                onClick={handleRepeatText}
            />
        </Tooltip>
    )
}
