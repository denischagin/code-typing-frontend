export type TText = TWord[]

export type TWord = {
    wordId: string
    wordIndex: number
    word: string
    symbols: TSymbol[]
}

export type TSymbol = {
    symbolId: string
    symbolIndex: number
    symbol: string
    overrideSymbol?: string
    extraSymbol?: string
}

export type TTypingStatus = "already-printed" | "now-printing" | "not-printing"