import {TSymbol} from "../model";

export const getSymbolsWordWithOverrides =
    (currentWordSymbols: TSymbol[], currentWordText: string, typedValue: string) => {
        return currentWordSymbols
            .slice(0, currentWordText.length)
            .map((symbol, index) => {
                if (symbol.symbol === typedValue[index] && typedValue.includes(symbol.symbol)) return symbol

                return {...symbol, overrideSymbol: typedValue[symbol.symbolIndex]}
            })
    }
