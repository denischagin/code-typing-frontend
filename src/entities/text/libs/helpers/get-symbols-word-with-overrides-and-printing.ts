import {TSymbol} from "../../model";

export const getSymbolsWordWithOverridesAndPrinting =
    (currentWordSymbols: TSymbol[], currentWordText: string, typedValue: string) => {
        return currentWordSymbols
            .slice(0, currentWordText.length)
            .map((symbol, index) => {
                let isPrinting = false
                let isPrinted = false

                console.log(symbol.symbolIndex, typedValue.length)

                if (symbol.symbolIndex === typedValue.length) isPrinting = true
                if (symbol.symbolIndex < typedValue.length) isPrinted = true

                if (symbol.symbol === typedValue[index] && typedValue.includes(symbol.symbol)) {
                    return {...symbol, isPrinting, isPrinted}
                }

                return {...symbol, overrideSymbol: typedValue[symbol.symbolIndex], isPrinting, isPrinted}
            })
    }
