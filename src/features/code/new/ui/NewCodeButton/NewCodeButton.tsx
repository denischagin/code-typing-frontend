import {IconButton, Tooltip} from "@chakra-ui/react";

import {useTypingCodeHandlers} from "@entities/code";
import {NextIcon} from "@shared/ui/icons";

export const NewCodeButton = () => {
    const {scrollTo, handleNewText, containerRef, inputRef} = useTypingCodeHandlers()

    const handleNewCode = () => {
        handleNewText()
        inputRef?.current?.focus()
    }

    const handleRepeatText = () => {
        if (containerRef.current?.scrollTop === 0) {
            return handleNewCode()
        }

        scrollTo({top: 0, behavior: "smooth"}, () => {
            handleNewCode()
        })
    }

    return (
        <Tooltip label="New text">
            <IconButton
                aria-label={"refresh code"}
                icon={<NextIcon/>}
                onClick={handleRepeatText}
            />
        </Tooltip>

    )

}