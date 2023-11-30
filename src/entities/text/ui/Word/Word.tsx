import { WordProps } from "./Word.interface.ts";
import { Text } from "@chakra-ui/react";
import { memo } from "react";
import { Symbol } from "../Symbol";
import { getSymbolStatus } from "@entities/text";

export const Word = memo(({
    wordIndex,
    expectedWord,
    printedWord,
    wordStatus = "default"
}: WordProps) => {

    const expectedWordWithoutSpace = expectedWord.trimEnd()

    const isWordWithExtra =
        printedWord && printedWord?.length > expectedWordWithoutSpace.length


    const wordWithExtra =
        isWordWithExtra
            ? expectedWordWithoutSpace + printedWord.slice(expectedWordWithoutSpace.length, printedWord.length) + " "
            : expectedWord

    return (
        <Text as="span">
            {wordWithExtra.split("").map((symbol, symbolIndex) =>
            (
                <Symbol
                    key={`${wordIndex}-${symbolIndex}`}
                    symbol={symbol}
                    isPrinting={symbolIndex === printedWord?.length}
                    status={
                        wordStatus === "printed"
                            ? "printed"
                            : getSymbolStatus({
                                printedWord,
                                symbolIndex,
                                expectedWord
                            })
                    }
                />
            ))}
        </Text>
    )
}
)