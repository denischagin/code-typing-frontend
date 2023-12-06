export interface IResult {
    resultId: string
    timeResultMilliseconds: number
    timeStartMilliseconds: number
    timeEndMilliseconds: number
    text: string
}

export type TResultStore = IResult[]