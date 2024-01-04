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
        const response = await baseQueryV1<TTextResponse>({
            url: '/texts',
            params: params ?? undefined,
        });
        return response.data
    }

    static async fetchProgrammingLanguages() {
        const response =
            await baseQueryV1<TProgrammingLanguageResponse>("texts/programming-languages/")
        return response.data
    }

    static async fetchCodeExamples() {
        const response =
            await baseQueryV1<TCodeExamplesResponse>("texts/code-examples/")
        return response.data
    }

    static async fetchCodeExamplesByName(name: string) {
        const response =
            await baseQueryV1<TCodeExamplesByNameResponse>({
                url: "texts/code-examples/",
                params: {
                    "programming-language-name": name
                },
            })
        return response.data
    }
}
