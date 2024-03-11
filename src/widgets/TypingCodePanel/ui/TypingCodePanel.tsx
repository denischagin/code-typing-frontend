import {useEffect} from "react";

import {Flex, IconButton, Text, Tooltip} from "@chakra-ui/react";

import {useSearchParams} from "react-router-dom";

import {useCodeErrors, useTypingCodeHandlers} from "@entities/code";
import {searchParamsEnum} from "@shared/constants";
import {RefreshIcon} from "@shared/ui/icons";
import {Timer, useTimer} from "@shared/ui/timer";

export const TypingCodePanel = () => {
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    const {scrollTo, endTyping, handleNewText, containerRef, isPrinting, isEnded, isNotStarted} = useTypingCodeHandlers()
    const {errorsCount} = useCodeErrors()

    const {start, time, reset} = useTimer({
        onEnd: () => {
            endTyping()
        }
    })

    useEffect(() => {
        if (isPrinting) {
            start()
        }
    }, [isPrinting])

    useEffect(() => {
        if (isEnded || isNotStarted) {
            reset()
        }
    }, [isEnded, isNotStarted])

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

            <Flex gap="20px" align="center">
                {errorsCount !== 0 && (
                    <Text color="red.300">{errorsCount}x</Text>
                )}

                <Timer time={time}/>
            </Flex>
        </Flex>
    )
}