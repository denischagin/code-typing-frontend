import {ITextRequestParams, TProgrammingLanguageResponse, TTextResponse} from "@entities/text";
import {baseQuery, fakerApiBaseQuery} from "@shared/api";

export class TextService {
    static async fetchText(params?: ITextRequestParams) {
        const response = await fakerApiBaseQuery<TTextResponse>({
            url: '/texts',
            params: params ?? undefined,
        });
        return response.data
    }

    static async fetchProgrammingLanguages() {
        const response =
            await baseQuery<TProgrammingLanguageResponse>("http://localhost:8080/api/v1/programming-languages/")
        return response.data
    }
}
