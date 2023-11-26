import {ChangeEventHandler, useRef, useState} from "react";
import {
    getExtraSymbols,
    getSymbolsWordWithOverridesAndPrinting,
    Symbol,
    textMock,
    TSymbol,
    TText,
    Word
} from "@entities/text";
import {Text} from "@chakra-ui/react";
import css from './Typing.module.scss'

export const Typing = () => {
    const typingFieldRef = useRef<HTMLInputElement>(null)

    const [currentText, setCurrentText] = useState(textMock)

    const [typingValue, setTypingValue] = useState('')
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    const currentWord = currentText[currentWordIndex]

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const typedValue = e.target.value
        setTypingValue(typedValue)

        const currentTextTemp: TText = JSON.parse(JSON.stringify(currentText))

        if (typedValue.endsWith(' ') && currentTextTemp[currentWordIndex].word === typedValue.trimEnd()) {
            setTypingValue('')
            if (currentWordIndex + 1 === currentTextTemp.length) {
                return (alert('Текст окончен'))
            }

            const nextFirstWordSymbols = currentTextTemp[currentWordIndex + 1].symbols[0]
            currentTextTemp[currentWordIndex + 1].symbols[0] = {...nextFirstWordSymbols, isPrinting: true}

            setCurrentText(currentTextTemp)

            return setCurrentWordIndex(prev => prev + 1)
        }

        const extraSymbols: TSymbol[] = getExtraSymbols(typedValue, currentWord.word)
        const symbolsWithOverrides =
            getSymbolsWordWithOverridesAndPrinting(currentTextTemp[currentWordIndex].symbols, currentWord.word, typedValue)

        currentTextTemp[currentWordIndex].symbols = [...symbolsWithOverrides
            , ...extraSymbols
        ]

        setCurrentText(currentTextTemp)
    }

    const handleFocus = () => {
        typingFieldRef.current?.focus()
    }

    return (
        <div className={css.typing} onClick={handleFocus}>
            <Text fontSize="x-large">
                {currentText.map(({wordId, symbols, wordIndex}) => (
                    <>
                        <Word
                            key={wordId}
                            wordId={wordId}
                            symbols={symbols}
                            currentWordIndex={currentWordIndex}
                            wordIndex={wordIndex}
                        />

                        <Symbol
                            key={`space-${wordId}`}
                            symbolId={`space-${wordId}`}
                            symbol={" "}
                            isPrinting={currentWordIndex === wordIndex
                                && (symbols[symbols.length - 1].isPrinted
                                    || !!symbols[symbols.length - 1].extraSymbol)}
                            status={"default"}
                        />
                    </>
                ))}
            </Text>

            <input
                autoFocus
                value={typingValue}
                className={css.typing__field}
                onChange={handleChange}
                ref={typingFieldRef}
            />
        </div>
    )

}
