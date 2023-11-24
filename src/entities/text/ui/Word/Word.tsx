import {WordProps} from "./Word.interface.ts";
import {Text} from "@chakra-ui/react";
import {memo} from "react";
import {Symbol} from "../Symbol";
import {TSymbolStatus} from "../Symbol/Symbol.interface.ts";

export const Word = memo(({
                              wordId, symbols, currentWordIndex, currentSymbolIndex, wordIndex, isSpaceBeforeWord
                          }: WordProps) => {


    return (
        <Text as="span" key={wordId}>
            <Symbol
                symbolId={`space-${wordId}`}
                symbol={" "}
                status={isSpaceBeforeWord ? "printing" : "default"}
            />

            {symbols.map(({symbol, symbolId, overrideSymbol, symbolIndex}) => (
                <Symbol
                    symbolId={symbolId}
                    symbol={overrideSymbol ? overrideSymbol : symbol}
                    status={overrideSymbol
                        ? overrideSymbol === ' ' ? "override" : 'error'
                        : currentWordIndex === wordIndex
                        && symbolIndex === currentSymbolIndex
                            ? "printing" : "default"}
                />
            ))}
        </Text>
    )
})