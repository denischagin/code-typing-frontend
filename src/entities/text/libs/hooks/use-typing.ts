import {ChangeEventHandler, useEffect, useState} from "react";
import {
    getExtraSymbols,
    getSymbolsWordWithOverridesAndPrinting,
    mappingStringToTextObject, text,
    TSymbol,
    TText
} from "@entities/text";

export const useTyping = () => {

    const [textString, setTextString] = useState(text)

    const [currentText, setCurrentText] = useState<TText>([])

    useEffect(() => {
        setCurrentText(mappingStringToTextObject(textString))
    }, [textString]);

    const [typingValue, setTypingValue] = useState('')
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    const currentWord = currentText[currentWordIndex]

    const handleEndText = () => {
        setCurrentWordIndex(0)
        setTypingValue('')
        const newText = "hello world, regex!!! ".repeat(Math.random() * 4 + 1)
        setTextString(newText)
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
        const maxInputLength = currentWord.word.length + 5
        if (typedValue.length > maxInputLength)
            return setTypingValue(typedValue.slice(0, maxInputLength))

        setTypingValue(typedValue)

        const currentTextTemp: TText = JSON.parse(JSON.stringify(currentText))
        const spaceCount = typedValue.split(" ").length - 1;

        if (currentWord.word === "") {
            currentTextTemp[currentWordIndex].symbols[0] = {
                ...currentTextTemp[currentWordIndex].symbols[0],
                isPrinting: false
            }

            return handleNextWord(currentTextTemp)
        }

        if (spaceCount === 1
            && typedValue.endsWith(' ')
            && currentTextTemp[currentWordIndex].word === typedValue.slice(0, typedValue.length - 1)
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