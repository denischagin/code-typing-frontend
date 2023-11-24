import {TSymbol} from "../../model";

export interface WordProps {
    wordId: string
    symbols: TSymbol[]
    currentWordIndex: number
    currentSymbolIndex: number
    wordIndex: number
    isSpaceBeforeWord: boolean
    // status: wordStatus
}

export type wordStatus = 'current' | 'default' | 'error' | 'printed'