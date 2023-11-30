import { ChangeEventHandler, useState } from "react";
import {
    text
} from "@entities/text";
import { useUnit } from "effector-react";
import { $timerStore, eventStartTimer, eventStopTimer } from "@entities/timer";

export const useTyping = () => {
    const [currentText] = useState<string[]>(text.split(' '))

    const [typingValue, setTypingValue] = useState('')
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const { timerStatus } = useUnit($timerStore)
    const [startTimer, stopTimer] = useUnit([eventStartTimer, eventStopTimer])

    const currentWord = currentText[currentWordIndex]

    const handleEndText = () => {
        setCurrentWordIndex(0)
        setTypingValue('')
        stopTimer()
    }

    const handleNextWord = () => {
        setCurrentWordIndex(prev => prev + 1)
        setTypingValue('')
    }

    const handleStartText = () => {
        startTimer()
    }

    const handleChangeTypingField: ChangeEventHandler<HTMLInputElement> = (e) => {
        const typedValue = e.target.value
        const maxInputLength = currentWord.length + 5

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