import {baseQueryV1} from "@shared/api";
import {TCodeExamplesByNameResponse, TCodeExamplesResponse, TProgrammingLanguageResponse} from "@entities/code";

export class CodeService {
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