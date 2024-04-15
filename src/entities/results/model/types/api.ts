import { IResultCode } from "@entities/results"

export interface ResultFromApi extends Omit<IResultCode, "startTime" | "endTime" | "resultTime"> {
    id: string
    codeExampleUUID: string
    userID: string
    startTime: string
    endTime: string
}

export interface ResultWithoutId extends Omit<ResultFromApi, "id" | "codeExampleUUID" | "userID"> {}

export enum ResultDirectionEnum {
    ASC = "asc",
    DESC = "desc"
}

export type ResultsSortBy = keyof Pick<ResultFromApi, "endTime" | "symbolsPerMinute" | "accuracy">

export interface ResultParams {
    page: number
    size: number
    direction: ResultDirectionEnum
    sortBy: ResultsSortBy
}
