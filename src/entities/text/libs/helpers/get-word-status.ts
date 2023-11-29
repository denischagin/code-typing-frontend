import {TWordStatus} from "@entities/text/ui/Word/Word.interface.ts";

export interface GetWordStatusArgs {
    wordIndex: number
    currentWordIndex: number
}

export const getWordStatus = ({wordIndex, currentWordIndex}: GetWordStatusArgs): TWordStatus => {
    if (currentWordIndex > wordIndex)
        return "printed"

    return "default"
}