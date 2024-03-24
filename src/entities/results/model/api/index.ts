import {ResultFromApi, ResultWithoutId} from "@entities/results";

export type GetSavedResultsResponse = ResultFromApi[]
export type SaveResultBody = ResultWithoutId | ResultFromApi
