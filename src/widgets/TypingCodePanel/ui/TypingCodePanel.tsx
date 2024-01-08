import {Flex, IconButton, Text, Tooltip} from "@chakra-ui/react";
import {useSearchParams} from "react-router-dom";
import {searchParamsEnum} from "@shared/constants";
import {useTypingCodeHandlers} from "@entities/code";
import {RefreshIcon} from "@shared/ui/icons";
import {Timer} from "@widgets/Timer";

export const TypingCodePanel = () => {
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

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
        <Flex justify="space-between" align="center" px="10px" mb="4px">
            <Flex align="center" gap="10px">
                <Text fontSize="large" textDecoration="underline">{languageName ?? "Random"}</Text>

                <Tooltip label="New text">
                    <IconButton
                        aria-label={"refresh code"}
                        icon={<RefreshIcon/>}
                        onClick={handleRepeatText}
                    />
                </Tooltip>
            </Flex>

            <Timer/>
        </Flex>
    )
}