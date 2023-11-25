export const getExtraSymbols = (typedValue: string, currentWordText: string) =>
    typedValue
        .slice(currentWordText.length, typedValue.length)
        .split('')
        .map((symbol, index) => ({
            symbol: "",
            symbolId: `extra-${index}`,
            extraSymbol: symbol,
            symbolIndex: currentWordText.length + index
        }))
