import {WordProps} from "./Word.interface.ts";
import {Text} from "@chakra-ui/react";
import {memo} from "react";
import {Symbol} from "../Symbol";
import {TSymbol} from "../../model";

export const Word =
    memo(({
              wordId, symbols, currentWordIndex, currentSymbolIndex, wordIndex, isSpaceBeforeWord
          }: WordProps) => {

        const isCurrentWord = currentWordIndex === wordIndex
        const getIsCurrentSymbol = (symbolIndex: number) => isCurrentWord && symbolIndex === currentSymbolIndex

        const getSymbolStatus = ({extraSymbol, overrideSymbol, symbolIndex}: TSymbol) => {
            if (overrideSymbol)
                return "error";

            if (extraSymbol)
                return "extra";

            if (
                currentWordIndex > wordIndex ||
                (isCurrentWord && currentSymbolIndex > symbolIndex)
            )
                return "printed";

            return "default";
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
                            isPrinting={getIsCurrentSymbol(symbolIndex)}
                            status={getSymbolStatus({
                                symbol, symbolId, overrideSymbol, symbolIndex, extraSymbol
                            })}
                        />
                    ))}
            </Text>
        )
    })