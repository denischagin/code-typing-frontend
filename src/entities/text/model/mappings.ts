import {TText} from "./interfaces.ts";

export const mappingStringToTextObject = (text: string): TText =>
    text
        .trimEnd()
        .split(" ")
        .map((word, wordIndex) => ({
            wordId: `${wordIndex}`,
            word: word,
            wordIndex,
            symbols:
                word
                    .split("")
                    .map((symbol, symbolIndex) =>
                        ({
                            symbolId: `${wordIndex}-${symbolIndex}`,
                            symbolIndex,
                            symbol: symbol,
                            isPrinting: wordIndex === 0 && symbolIndex === 0
                        }))
        }))
