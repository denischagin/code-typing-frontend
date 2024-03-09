import {IResultFromApi, IResultWithoutId} from "@entities/results";

export type TGetSavedResultsResponse = IResultFromApi[]
export type TSaveResultBody = IResultWithoutId | IResultFromApi
