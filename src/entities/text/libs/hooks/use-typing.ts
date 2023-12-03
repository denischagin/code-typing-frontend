import {ChangeEventHandler} from "react";
import {useUnit} from "effector-react";
import {$timerStore, eventStartTimer, eventStopTimer} from "@entities/timer";
import {useGetTextQuery} from "@entities/text/libs/hooks/use-get-text-query.ts";
import {
    $currentWordIndexStore,
    $typingValueStore,
    eventChangeCurrentWordIndex,
    eventChangeTypingValue, eventIncrementCurrentWordIndex
} from "@entities/text";


export const useTyping = () => {
    const {data: text} = useGetTextQuery()

    const currentText = text?.data[0].content?.split(' ')

    const [currentWordIndex, setCurrentWordIndex, incrementCurrentWordIndex] =
        useUnit([$currentWordIndexStore, eventChangeCurrentWordIndex, eventIncrementCurrentWordIndex])
    const [typingValue, setTypingValue] =
        useUnit([$typingValueStore, eventChangeTypingValue])

    const {timerStatus} = useUnit($timerStore)
    const [startTimer, stopTimer] = useUnit([eventStartTimer, eventStopTimer])

    const currentWord = currentText?.[currentWordIndex]

    const handleEndText = async () => {
        setCurrentWordIndex(0)
        setTypingValue('')
        stopTimer()
    }

    const handleNextWord = () => {
        incrementCurrentWordIndex()
        setTypingValue('')
    }

    const handleStartText = () => {
        startTimer()
    }

    const handleChangeTypingField: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (!currentText) return

        const typedValue = e.target.value
        const maxInputLength = (currentWord?.length ?? 0) + 5

        if (typedValue.length > maxInputLength)
            return setTypingValue(typedValue.slice(0, maxInputLength))

        setTypingValue(typedValue)

        if (typedValue.length === 1 && timerStatus === "stoped") {
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