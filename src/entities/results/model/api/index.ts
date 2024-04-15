import { ResultFromApi, ResultWithoutId } from "@entities/results"

export type GetSavedResultsResponse = {
    content: ResultFromApi[]
    totalPages: number
    totalElements: number
}
export type SaveResultBody = ResultWithoutId | ResultFromApi
