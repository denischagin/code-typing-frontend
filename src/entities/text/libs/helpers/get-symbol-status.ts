export interface GetSymbolStatusArgs {
    printedWord?: string
    expectedWord: string
    symbolIndex: number
}

export const getSymbolStatus =
    ({
         expectedWord,
         printedWord,
         symbolIndex,
     }: GetSymbolStatusArgs) => {
        if (
            printedWord &&
            expectedWord[symbolIndex] !== printedWord[symbolIndex]?.trimEnd() &&
            symbolIndex <= printedWord.length - 1
        ) {
            if (symbolIndex >= expectedWord.length - 1)
                return "extra";
            return "error";
        }

        if (printedWord && symbolIndex <= printedWord?.length - 1)
            return "printed";

        return "default";
    }
