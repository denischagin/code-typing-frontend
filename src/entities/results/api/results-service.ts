import {baseQueryV1} from "@shared/api";
import {TGetSavedResultsResponse, TSaveResultBody} from "@entities/results";

export class ResultsService {
    static async fetchSavedResults() {
        const response =
            await baseQueryV1<TGetSavedResultsResponse>("results/")
        return response.data
    }

    static async saveResult(body: TSaveResultBody) {
        const response =
            await baseQueryV1<TGetSavedResultsResponse>({
                url: "results/",
                method: "POST",
                data: body
            })
        return response.data
    }
}