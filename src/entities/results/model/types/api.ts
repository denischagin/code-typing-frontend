import {IResultCode} from "@entities/results";

export interface ResultFromApi extends Omit<IResultCode, "startTime" | "endTime" | "resultTime"> {
    id: string;
    codeExampleUUID: string;
    userID: string
    startTime: string
    endTime: string
}

export interface ResultWithoutId extends Omit<ResultFromApi, "id" | "codeExampleUUID" | "userID"> {
}