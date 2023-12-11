import {ChangeEventHandler} from "react";
import {useUnit} from "effector-react";
import {$timerStore, eventStartTimer, eventStopTimer} from "@entities/timer";
import {
    $currentWordIndexStore,
    $typingValueStore,
    eventChangeTypingValue,
    eventIncrementCurrentWordIndex,
    useGetTextQuery
} from "@entities/text";
import {eventAddResult, getResultId} from "@entities/results";
import {useSearchParams} from "react-router-dom";
import {searchParamsEnum} from "@shared/constants";
import {$textParamsStore} from "@entities/text/model/store/text-params.ts";


export const useTyping = () => {
    const {data: textObject} = useGetTextQuery()

    const [, setSearchParams] = useSearchParams()

    const currentTextString = textObject?.data[0].content
    const currentText = currentTextString?.split(' ')

    const {
        typingValue,
        setTypingValue,
        stopTimer,
        startTimer,
        incrementCurrentWordIndex,
        currentWordIndex,
        addResult,
        timerState: {timerStatus, timeMillisecondsStart}
    } = useUnit({
        currentWordIndex: $currentWordIndexStore,
        incrementCurrentWordIndex: eventIncrementCurrentWordIndex,
        typingValue: $typingValueStore,
        setTypingValue: eventChangeTypingValue,
        addResult: eventAddResult,
        timerState: $timerStore,
        startTimer: eventStartTimer,
        stopTimer: eventStopTimer,
    })

    const currentWord = currentText?.[currentWordIndex]

    const handleEndText = async () => {
        const stopTimeMilliseconds = Date.now()

        stopTimer(stopTimeMilliseconds)

        if (!timeMillisecondsStart || !currentTextString)
            return

        const resultId = getResultId({
            timeEndMilliseconds: stopTimeMilliseconds,
            timeStartMilliseconds: timeMillisecondsStart
        })

        addResult({
            resultId,
            text: currentTextString,
            timeEndMilliseconds: stopTimeMilliseconds,
            timeStartMilliseconds: timeMillisecondsStart,
            timeResultMilliseconds: stopTimeMilliseconds - timeMillisecondsStart
        })

        setSearchParams({[searchParamsEnum.resultId]: resultId})
    }

    const handleNextWord = () => {
        incrementCurrentWordIndex()
        setTypingValue('')
    }

    const handleStartText = () => {
        const startTimeMilliseconds = Date.now()

        startTimer(startTimeMilliseconds)
        setSearchParams({})
    }

    const handleChangeTypingField: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (!currentText || timerStatus === "stopped" && currentWordIndex !== 0)
            return

        const typedValue = e.target.value
        const maxInputLength = (currentWord?.length ?? 0) + 5

        if (typedValue.length > maxInputLength)
            return setTypingValue(typedValue.slice(0, maxInputLength))

        setTypingValue(typedValue)

        if (typedValue.length === 1 && timerStatus === "stopped") {
            handleStartText()
        }

        if (typedValue === currentText[currentWordIndex] + " ") {
            if (currentWordIndex === currentText.length - 1)
                return handleEndText()

            return handleNextWord()
        }
    }

    return {
        typingValue,
        currentText,
        currentWordIndex,
        currentWord,
        handleChangeTypingField,
        handleNextWord
    }
}