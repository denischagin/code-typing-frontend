import {Flex, Text} from "@chakra-ui/react";
import {convertMillisecondsToTime} from "@shared/libs";
import {useSearchParams} from "react-router-dom";
import {searchParamsEnum} from "@shared/constants";
import {useFindResultById, useResultStats} from "@entities/results";

export const ResultSpeed = () => {
    const [searchParams] = useSearchParams()

    const resultId = searchParams.get(searchParamsEnum.resultId)

    const resultById = useFindResultById(resultId)
    const resultStats = useResultStats(resultById?.result ?? null)

    if (!resultId || !resultById?.result || !resultStats)
        return null

    const {timeResultMilliseconds, text} = resultById.result
    const {wordsPerMinuteString, charactersPerMinuteString} = resultStats

    return (
        <Flex direction="column" align="center">
            <Text fontSize="xxx-large">
                Result: {(resultById.resultIndex) + 1}
            </Text>
            <Text fontSize="xxx-large">
                {convertMillisecondsToTime(timeResultMilliseconds)}
            </Text>

            <Flex gap="10px" justify="space-evenly" wrap="wrap" w="100%">
                <Text fontSize="xxx-large">
                    {charactersPerMinuteString} sym./m.
                </Text>

                <Text fontSize="xxx-large">
                    {wordsPerMinuteString} word/m.
                </Text>
            </Flex>

            <Text>
                <Text as="strong">Text:</Text> {text}
            </Text>
        </Flex>
    )
}