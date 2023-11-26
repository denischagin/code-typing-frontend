import {WordProps} from "./Word.interface.ts";
import {Text} from "@chakra-ui/react";
import {memo} from "react";
import {Symbol} from "../Symbol";
import {getSymbolStatus} from "@entities/text";

export const Word =
    memo(({
              symbols
          }: WordProps) => {

            return (
                <Text as="span">
                    {symbols.map((symbolObject) =>
                        (
                            <Symbol
                                key={symbolObject.symbolId}
                                symbolId={symbolObject.symbolId}
                                symbol={symbolObject.extraSymbol ?? symbolObject.symbol}
                                isPrinting={symbolObject.isPrinting}
                                status={getSymbolStatus(symbolObject)}
                            />
                        ))}
                </Text>
            )
        }, (prevProps, nextProps) =>
            prevProps.wordId === nextProps.wordId &&
            JSON.stringify(prevProps.symbols) === JSON.stringify(nextProps.symbols)
    )