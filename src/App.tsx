import {Input, Text} from "@chakra-ui/react";
import {textMock, TSymbol, TText, TWord, Word} from "./entities/text";
import {ChangeEventHandler, useState} from "react";

function App() {
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

        if (typedValue.endsWith(' ') && currentTextTemp[currentWordIndex].word === typingValue.trimEnd()) {
            setTypingValue('')
            return setCurrentWordIndex(prev => prev + 1)
        }

        const extraSymbols: TSymbol[] =
            typedValue
                .slice(currentWord.word.length, typedValue.length)
                .split('')
                .map((symbol, index) => ({
                    symbol: "",
                    symbolId: `extra-${index}`,
                    extraSymbol: symbol,
                    symbolIndex: currentWord.word.length + index

                }))


        // if (typedValue.length > currentWord.word.length) {
        //     const symbolsLength = currentTextTemp[currentWordIndex].symbols.length
        //
        //     currentTextTemp[currentWordIndex].symbols = [
        //         ...currentTextTemp[currentWordIndex].symbols,
        //         ...typedValue
        //             .slice(currentWord.word.length, typingValue.length - 1)
        //             .split('')
        //             .map((symbol, index) => ({
        //                 symbol: symbol,
        //                 symbolIndex: symbolsLength,
        //                 overrideSymbol: " ",
        //                 symbolId: `extra-${index}`
        //             }))
        //     ]
        //     return setCurrentText(currentTextTemp)
        // } else {
        //     currentTextTemp[currentWordIndex].symbols = [
        //         ...currentTextTemp[currentWordIndex].symbols,
        //     ]
        // }


        // if (typedValue.endsWith(' ')) {
        //     currentTextTemp[currentWordIndex].symbols =
        //         currentTextTemp[currentWordIndex].symbols
        //             .map((symbol) => {
        //                 if (symbol.symbolIndex >= typingValue.length) return {...symbol, overrideSymbol: " "}
        //                 return symbol
        //             })
        //     setCurrentText(currentTextTemp)
        //     setCurrentWordIndex(prev => prev + 1)
        //     setTypingValue("")
        //     return
        // }
        // setCurrentText((prevCurrentText) => {
        //     return prevCurrentText.map((word, index) => {
        //         if (index !== currentWordIndex) {
        //             return word;
        //         }
        //
        //         const updatedSymbols = word.symbols.map((symbol, symbolIndex) => {
        //             if (symbol.symbol === typedValue[symbolIndex] && typedValue.includes(symbol.symbol)) {
        //                 return symbol;
        //             }
        //
        //             return {...symbol, overrideSymbol: typedValue[symbol.symbolIndex]};
        //         });
        //
        //         return {...word, symbols: updatedSymbols};
        //     });
        // });
        currentTextTemp[currentWordIndex].symbols =
            [
                ...currentTextTemp[currentWordIndex].symbols
                    .slice(0, currentWord.word.length)
                    .map((symbol, index) => {
                        if (symbol.symbol === typedValue[index] && typedValue.includes(symbol.symbol)) return symbol

                        return {...symbol, overrideSymbol: typedValue[symbol.symbolIndex]}
                    }),
                ...extraSymbols
            ]

        console.log(typedValue.slice(currentWord.word.length, typedValue.length))
        console.log(currentTextTemp[currentWordIndex])
        console.log(extraSymbols)

        setCurrentText(currentTextTemp)
    }

    return (
        <div>
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
        </div>
    )
}

export default App
