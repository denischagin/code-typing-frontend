import {baseQueryV1} from "@shared/api";
import {TGetSavedResultsResponse, TSaveResultBody} from "@entities/results";

class ResultsService {
    async fetchSavedResults() {
        const response =
            await baseQueryV1<TGetSavedResultsResponse>("/results/")
        return response.data
    }

    async saveResult(body: TSaveResultBody) {
        const response =
            await baseQueryV1<TGetSavedResultsResponse>({
                url: "results/",
                method: "POST",
                data: body
            })
        return response.data
    }
}

export default new ResultsService();