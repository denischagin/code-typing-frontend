import {
    ITextRequestParams,
    TCodeExamplesByNameResponse,
    TCodeExamplesResponse,
    TProgrammingLanguageResponse,
    TTextResponse
} from "@entities/text";
import {baseQueryV1, fakerApiBaseQuery} from "@shared/api";

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
            await baseQueryV1<TProgrammingLanguageResponse>("http://localhost:8080/api/v1/programming-languages/")
        return response.data
    }

    static async fetchCodeExamples() {
        const response =
            await baseQueryV1<TCodeExamplesResponse>("api/v1/code-examples/")
        return response.data
    }

    static async fetchCodeExamplesByName(name: string) {
        const response =
            await baseQueryV1<TCodeExamplesByNameResponse>({
                url: "api/v1/code-examples/",
                params: {
                    "programming-language-name": name
                },
            })
        return response.data
    }
}
