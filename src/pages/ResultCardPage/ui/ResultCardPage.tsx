import {useParams} from "react-router-dom";
import {useUnit} from "effector-react";
import {$resultsStore} from "@entities/results";
import {useMemo} from "react";
import {Text} from "@chakra-ui/react";
import {convertMillisecondsToTime} from "@shared/libs";

const ResultCardPage = () => {
    const {resultId} = useParams()
    const results = useUnit($resultsStore)

    const currentResult = useMemo(() => {
        return results?.find((result) => result.resultId === resultId)
    }, [results, resultId])

    if (!currentResult)
        return <Text fontSize="xxx-large" color="red.500">Not found vim (</Text>

    const {timeResultMilliseconds, timeEndMilliseconds, timeStartMilliseconds, text} = currentResult

    const characterCount = text.length
    const wordCount = text.split(' ').length

    const charactersPerMinute = (characterCount / timeResultMilliseconds) * 60000
    const wordsPerMinute = (wordCount / timeResultMilliseconds) * 60000

    const charactersPerMinuteString = charactersPerMinute.toFixed(2)
    const wordsPerMinuteString = wordsPerMinute.toFixed(2)


    return (
        <div>
            <Text fontSize="xxx-large">
                {convertMillisecondsToTime(timeResultMilliseconds)}
            </Text>

            <Text fontSize="xxx-large">
                Скорость:
            </Text>

            <Text fontSize="xxx-large">
                {charactersPerMinuteString} символов в минуту
            </Text>

            <Text fontSize="xxx-large">
                {wordsPerMinuteString} слов в минуту
            </Text>
        </div>
    )
}

export default ResultCardPage