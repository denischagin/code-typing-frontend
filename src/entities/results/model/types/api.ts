import {IResultCode} from "@entities/results";

export interface IResultFromApi extends Omit<IResultCode, "startTime" | "endTime"> {
    id: string;
    codeExampleUUID: string;
    userID: string
    startTime: string
    endTime: string
}