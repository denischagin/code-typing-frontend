import { GetSavedResultsResponse, ResultParams, SaveResultBody } from "@entities/results"
import { baseQueryV1 } from "@shared/api"

class ResultsService {
    async fetchSavedResults(params: ResultParams) {
        const response = await baseQueryV1<GetSavedResultsResponse>({
            url: "/results/",
            params: params
        })
        return response.data
    }

    async saveResult(body: SaveResultBody) {
        const response = await baseQueryV1<GetSavedResultsResponse>({
            url: "results/",
            method: "POST",
            data: body
        })
        return response.data
    }
}

export default new ResultsService()
