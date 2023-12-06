import { ChangeEventHandler } from "react";
import { useUnit } from "effector-react";
import { $timerStore, eventStartTimer, eventStopTimer } from "@entities/timer";
import {
    $currentWordIndexStore,
    $typingValueStore,
    eventChangeTypingValue,
    eventIncrementCurrentWordIndex,
    useGetTextQuery
} from "@entities/text";
import { eventAddResult, getResultId } from "@entities/results";


export const useTyping = () => {
    const { data: textObject } = useGetTextQuery()

    const currentTextString = textObject?.data[0].content
    const currentText = currentTextString?.split(' ')

    const [currentWordIndex, incrementCurrentWordIndex] =
        useUnit([$currentWordIndexStore, eventIncrementCurrentWordIndex])
    const [typingValue, setTypingValue] =
        useUnit([$typingValueStore, eventChangeTypingValue])

    const [addResult] = useUnit([eventAddResult])

    const { timerStatus, timeMillisecondsStart } = useUnit($timerStore)
    const [startTimer, stopTimer] = useUnit([eventStartTimer, eventStopTimer])

    const currentWord = currentText?.[currentWordIndex]

    const handleEndText = async () => {
        const stopTimeMilliseconds = Date.now()

        stopTimer(stopTimeMilliseconds)

        if (!timeMillisecondsStart || !currentTextString)
            return

        addResult({
            resultId: getResultId({
                timeEndMilliseconds: stopTimeMilliseconds,
                timeStartMilliseconds: timeMillisecondsStart
            }),
            text: currentTextString,
            timeEndMilliseconds: stopTimeMilliseconds,
            timeStartMilliseconds: timeMillisecondsStart,
            timeResultMilliseconds: stopTimeMilliseconds - timeMillisecondsStart
        })
    }

    const handleNextWord = () => {
        incrementCurrentWordIndex()
        setTypingValue('')
    }

    const handleStartText = () => {
        const startTimeMilliseconds = Date.now()

        startTimer(startTimeMilliseconds)
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