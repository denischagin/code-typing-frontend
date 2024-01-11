export interface IResult {
    resultId: string
    timeResultMilliseconds: number
    timeStartMilliseconds: number
    timeEndMilliseconds: number
    text: string
    charactersPerMinuteString: string,
    wordsPerMinuteString: string,
}

export interface IResultCode {
    symbolPerMinute: null | number,
    startTime: Date | null,
    endTime: Date | null,
    symbolsPerSecond: number[]
    text: string | null;
    resultTime: Date | null
    errorsCount: number | null
    accuracy: number | null
}

export type TResultStore = IResult[]