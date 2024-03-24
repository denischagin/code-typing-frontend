import {IconButton, Tooltip} from "@chakra-ui/react";

import {useTypingCodeHandlers} from "@entities/code";
import {RefreshIcon} from "@shared/ui/icons";

export const RepeatCodeButton = () => {
    const {scrollTo, handleNewText, containerRef} = useTypingCodeHandlers()

    const handleRepeatText = () => {
        if (containerRef.current?.scrollTop === 0) {
            return handleNewText()
        }

        scrollTo({top: 0, behavior: "smooth"}, () => {
            handleNewText()
        })
    }

    return (
        <Tooltip label="New text">
            <IconButton
                aria-label={"refresh code"}
                icon={<RefreshIcon/>}
                onClick={handleRepeatText}
            />
        </Tooltip>

    )

}