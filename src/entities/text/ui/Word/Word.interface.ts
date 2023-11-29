import {ICursorPosition} from "@entities/cursor";

export interface WordProps {
    wordIndex: number
    expectedWord: string
    printedWord?: string
    wordStatus?: TWordStatus
    onChangeCursorPosition: (cursorPosition: ICursorPosition) => void
}

export type TWordStatus = 'current' | 'default' | 'error' | 'printed'