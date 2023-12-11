import {ChangeEventHandler, useEffect} from "react";
import {useUnit} from "effector-react";
import {$timerStore, eventStartTimer, eventStopTimer} from "@entities/timer";
import {
    $currentWordIndexStore, $typingValueStore,
    eventChangeTypingValue,
    eventIncrementCurrentWordIndex,
    useGetTextQuery, useText,
} from "@entities/text";
import {eventAddResult, getResultWithStats} from "@entities/results";
import {useSearchParams} from "react-router-dom";
import {searchParamsEnum} from "@shared/constants";


export const useTyping = () => {
    const {data: textObject} = useGetTextQuery()

    const [, setSearchParams] = useSearchParams()

    const currentTextString = textObject?.content
    const currentText = currentTextString?.split(' ')

    const store = useUnit({
        currentWordIndex: $currentWordIndexStore,
        incrementCurrentWordIndex: eventIncrementCurrentWordIndex,
        typingValue: $typingValueStore,
        setTypingValue: eventChangeTypingValue,
        addResult: eventAddResult,
        timerState: $timerStore,
        startTimer: eventStartTimer,
        stopTimer: eventStopTimer,
    })

    const {handleResetText} = useText()

    useEffect(() => {
        return () => handleResetText()
    }, []);

    const currentWord = currentText?.[store.currentWordIndex]

    const handleEndText = async () => {
        const stopTimeMilliseconds = Date.now()

        store.stopTimer(stopTimeMilliseconds)

        if (!store.timerState.timeMillisecondsStart || !currentTextString)
            return

        const result = getResultWithStats({
            text: currentTextString,
            timeMillisecondsStart: store.timerState.timeMillisecondsStart,
            stopTimeMilliseconds
        })

        store.addResult(result)

        setSearchParams({[searchParamsEnum.resultId]: result.resultId})
    }

    const handleNextWord = () => {
        store.incrementCurrentWordIndex()
        store.setTypingValue('')
    }

    const handleStartText = () => {
        const startTimeMilliseconds = Date.now()

        store.startTimer(startTimeMilliseconds)
        setSearchParams({})
    }

    const handleChangeTypingField: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (!currentText || store.timerState.timerStatus === "stopped" && store.currentWordIndex !== 0)
            return

        const typedValue = e.target.value
        const maxInputLength = (currentWord?.length ?? 0) + 5

        if (typedValue.length > maxInputLength)
            return store.setTypingValue(typedValue.slice(0, maxInputLength))

        store.setTypingValue(typedValue)

        if (typedValue.length === 1 && store.timerState.timerStatus === "stopped") {
            handleStartText()
        }

        if (typedValue === currentText[store.currentWordIndex] + " ") {
            if (store.currentWordIndex === currentText.length - 1)
                return handleEndText()

            return handleNextWord()
        }
    }

    return {
        typingValue: store.typingValue,
        currentText,
        currentWordIndex: store.currentWordIndex,
        currentWord,
        handleChangeTypingField,
        handleNextWord
    }
}