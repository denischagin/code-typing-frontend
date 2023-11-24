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
            currentTextTemp[currentWordIndex].symbols
                .map((symbol, index) => {
                    console.log(index)
                    if (symbol.symbol === typedValue[index] && typedValue.includes(symbol.symbol)) return symbol

                    return {...symbol, overrideSymbol: typedValue[symbol.symbolIndex]}
                })

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
                            && currentWord.word === typingValue
                        }
                        currentSymbolIndex={currentSymbolIndex}
                    />
                    // <Text as="span" key={wordId}>
                    //     <Text
                    //         as="span"
                    //         bgColor={currentWord
                    //         && wordIndex === currentWord.wordIndex + 1
                    //         && currentWord.word === typingValue
                    //             ? "blackAlpha.400" : undefined}
                    //     >
                    //         {" "}
                    //     </Text>
                    //     {symbols.map(({symbol, symbolId, overrideSymbol, symbolIndex}) => (
                    //         overrideSymbol ?
                    //             <Text
                    //                 key={symbolId}
                    //                 as="span"
                    //                 color="red"
                    //                 borderBottom={overrideSymbol === " " ? "1px solid red" : undefined}
                    //                 bgColor={currentWordIndex === wordIndex && symbolIndex === currentSymbolIndex ? "blackAlpha.400" : undefined}
                    //             >
                    //                 {overrideSymbol === " " ? symbol : overrideSymbol}
                    //             </Text>
                    //             :
                    //             <Text
                    //                 key={symbolId}
                    //                 as="span"
                    //                 bgColor={currentWordIndex === wordIndex && symbolIndex === currentSymbolIndex ? "blackAlpha.400" : undefined}
                    //             >
                    //                 {symbol}
                    //             </Text>
                    //     ))}
                    // </Text>
                ))}
            </Text>

            <Input value={typingValue} onChange={handleChange}/>
        </div>
    )
}

export default App
