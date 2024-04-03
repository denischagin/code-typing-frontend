import { GetSavedResultsResponse, SaveResultBody } from "@entities/results"
import { baseQueryV1 } from "@shared/api"

class ResultsService {
    async fetchSavedResults() {
        const response = await baseQueryV1<GetSavedResultsResponse>("/results/")
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
