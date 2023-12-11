export interface IResult {
    resultId: string
    timeResultMilliseconds: number
    timeStartMilliseconds: number
    timeEndMilliseconds: number
    text: string
    charactersPerMinuteString: string,
    wordsPerMinuteString: string,
}

export type TResultStore = IResult[]