export interface WordProps {
    wordIndex: number
    expectedWord: string
    printedWord?: string
    wordStatus?: TWordStatus
}

export type TWordStatus = 'current' | 'default' | 'error' | 'printed'