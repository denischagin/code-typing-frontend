import {IResultCode} from "@entities/results";

export interface IResultFromApi extends Omit<IResultCode, "startTime" | "endTime" | "resultTime"> {
    id: string;
    codeExampleUUID: string;
    userID: string
    startTime: string
    endTime: string
}

export interface IResultWithoutId extends Omit<IResultFromApi, "id" | "codeExampleUUID" | "userID"> {
}