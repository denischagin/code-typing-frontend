import {Button, ButtonProps} from "@chakra-ui/react";

import {useTypingCodeHandlers} from "@entities/code";

export const ButtonScrollToResult = (props: ButtonProps) => {
    const {scrollToResult, isEnded} = useTypingCodeHandlers()

    const handleScrollToResult = () => {
        scrollToResult()
    }

    return (
        isEnded && (
            <Button onClick={handleScrollToResult} {...props} />
        )

    )
}