export interface IResult {
    timeResultMilliseconds: number
    timeStartMilliseconds: number
    timeEndMilliseconds: number
    text: string
}

export type TResultStore = IResult[]