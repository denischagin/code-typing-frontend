import {ChangeEventHandler, useState} from "react";
import {getExtraSymbols, getSymbolsWordWithOverrides, textMock, TSymbol, TText, Word} from "@entities/text";
import {Input, Text} from "@chakra-ui/react";

export const Typing = () => {
    const [currentText, setCurrentText]
        = useState(textMock)

    const [typingValue, setTypingValue] = useState('')
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    const currentWord = currentText[currentWordIndex]
    const currentSymbolIndex = typingValue.length

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const typedValue = e.target.value
        setTypingValue(typedValue)

        const currentTextTemp: TText = JSON.parse(JSON.stringify(currentText))

        if (typedValue.endsWith(' ') && currentTextTemp[currentWordIndex].word === typedValue.trimEnd()) {
            setTypingValue('')
            return setCurrentWordIndex(prev => prev + 1)
        }

        const extraSymbols: TSymbol[] = getExtraSymbols(typedValue, currentWord.word)
        const symbolsWithOverrides =
            getSymbolsWordWithOverrides(currentTextTemp[currentWordIndex].symbols, currentWord.word, typedValue)

        currentTextTemp[currentWordIndex].symbols = [...symbolsWithOverrides, ...extraSymbols]

        setCurrentText(currentTextTemp)
    }

    return (
        <>
            <Text fontSize="x-large">
                {currentText.map(({wordId, symbols, wordIndex}) => (
                    <Word
                        key={wordId}
                        wordId={wordId}
                        symbols={symbols}
                        currentWordIndex={currentWordIndex}
                        wordIndex={wordIndex}
                        isSpaceBeforeWord={
                            currentWord
                            && wordIndex === currentWord.wordIndex + 1
                            && currentWord.word.length <= typingValue.length
                        }
                        currentSymbolIndex={currentSymbolIndex}
                    />
                ))}
            </Text>

            <Input value={typingValue} onChange={handleChange}/>
        </>
    )

}
