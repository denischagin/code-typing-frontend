import {TSymbol} from "../../model";

export interface WordProps {
    wordId: string
    symbols: TSymbol[]
    currentWordIndex: number
    wordIndex: number
}

//TODO добавить word статус
export type wordStatus = 'current' | 'default' | 'error' | 'printed'