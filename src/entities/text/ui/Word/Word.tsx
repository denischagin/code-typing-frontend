import {WordProps} from "./Word.interface.ts";
import {Text} from "@chakra-ui/react";
import {memo} from "react";
import {Symbol} from "../Symbol";

export const Word = memo(({
                              wordId, symbols, currentWordIndex, currentSymbolIndex, wordIndex, isSpaceBeforeWord
                          }: WordProps) => {


    if (wordIndex === 0) {
        console.log(currentWordIndex, wordIndex, currentSymbolIndex, symbols.length)
    }

    return (
        <Text as="span" key={wordId}>
            <Symbol
                symbolId={`space-${wordId}`}
                symbol={" "}
                isPrinting={isSpaceBeforeWord}
                status={"default"}
            />

            {symbols.map(({symbol, symbolId, overrideSymbol, symbolIndex, extraSymbol}) =>
                (
                    <Symbol
                        symbolId={symbolId}
                        symbol={extraSymbol ?? symbol}
                        isPrinting={
                            currentWordIndex === wordIndex
                            && symbolIndex === currentSymbolIndex
                        }
                        status={overrideSymbol
                            ? "error"
                            :
                                extraSymbol ? "extra" : "default"}
                    />
                ))}
        </Text>
    )
})