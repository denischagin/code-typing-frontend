import {ChangeEventHandler, useMemo, useState} from "react";
import {
    getExtraSymbols,
    getSymbolsWordWithOverridesAndPrinting,
    mappingStringToTextObject, text,
    TSymbol,
    TText
} from "@entities/text";

export const useTyping = () => {

    const textMock: TText = useMemo(() => mappingStringToTextObject(text), [])

    const [currentText, setCurrentText] = useState(textMock)

    const [typingValue, setTypingValue] = useState('')
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    const currentWord = currentText[currentWordIndex]

    const handleEndText = () => {
        alert('Текст окончен')
    }

    const handleNextWord = (currentTextTemp: TText) => {
        setTypingValue('')
        if (currentWordIndex + 1 === currentTextTemp.length) {
            handleEndText()
            return
        }

        const nextFirstWordSymbols = currentTextTemp[currentWordIndex + 1].symbols[0]
        currentTextTemp[currentWordIndex + 1].symbols[0] = {...nextFirstWordSymbols, isPrinting: true}

        setCurrentText(currentTextTemp)

        return setCurrentWordIndex(prev => prev + 1)
    }

    const handleChangeTypingField: ChangeEventHandler<HTMLInputElement> = (e) => {
        const typedValue = e.target.value
        setTypingValue(typedValue)

        const currentTextTemp: TText = JSON.parse(JSON.stringify(currentText))
        const spaceCount = typedValue.split(" ").length - 1;

        if (spaceCount === 1
            && typedValue.endsWith(' ')
            && currentTextTemp[currentWordIndex].word === typedValue.trimEnd()
        )
            return handleNextWord(currentTextTemp)

        const extraSymbols: TSymbol[] = getExtraSymbols(typedValue, currentWord.word)
        const symbolsWithOverrides =
            getSymbolsWordWithOverridesAndPrinting(currentTextTemp[currentWordIndex].symbols, currentWord.word, typedValue)

        currentTextTemp[currentWordIndex].symbols = [
            ...symbolsWithOverrides,
            ...extraSymbols
        ]

        setCurrentText(currentTextTemp)
    }

    return {
        typingValue,
        currentText,
        currentWordIndex,
        currentWord,
        handleChangeTypingField,
    }
}