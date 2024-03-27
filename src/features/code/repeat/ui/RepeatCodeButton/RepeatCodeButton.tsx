import {IconButton, Tooltip} from "@chakra-ui/react";

import {useTypingCodeHandlers} from "@entities/code";
import {RefreshIcon} from "@shared/ui/icons";

export const RepeatCodeButton = () => {
    const {scrollTo, containerRef, resetTyping} = useTypingCodeHandlers()

    const handleRepeatText = () => {
        if (containerRef.current?.scrollTop === 0) {
            return resetTyping()
        }

        scrollTo({top: 0, behavior: "smooth"}, () => {
            resetTyping()
        })
    }

    return (
        <Tooltip label="Repeat text">
            <IconButton
                aria-label={"refresh code"}
                icon={<RefreshIcon/>}
                onClick={handleRepeatText}
            />
        </Tooltip>

    )

}