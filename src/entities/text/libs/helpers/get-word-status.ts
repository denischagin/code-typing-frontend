import {TWordStatus} from "@entities/text";

export interface GetWordStatusArgs {
    wordIndex: number
    currentWordIndex: number
}

export const getWordStatus = ({wordIndex, currentWordIndex}: GetWordStatusArgs): TWordStatus => {
    if (currentWordIndex > wordIndex)
        return "printed"

    return "default"
}