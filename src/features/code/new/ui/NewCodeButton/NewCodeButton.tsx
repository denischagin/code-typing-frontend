import {IconButton, Tooltip} from "@chakra-ui/react";

import {useTypingCodeHandlers} from "@entities/code";
import {NextIcon} from "@shared/ui/icons";

export const NewCodeButton = () => {
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
                icon={<NextIcon/>}
                onClick={handleRepeatText}
            />
        </Tooltip>

    )

}