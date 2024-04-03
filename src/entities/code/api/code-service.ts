import {
    TCodeExampleByUUID,
    TCodeExamplesByNameResponse,
    TCodeExamplesResponse,
    TProgrammingLanguageResponse
} from "@entities/code"
import { baseQueryV1 } from "@shared/api"

class CodeService {
    async fetchProgrammingLanguages() {
        const response = await baseQueryV1<TProgrammingLanguageResponse>(
            "texts/programming-languages/"
        )
        return response.data
    }

    async fetchCodeExamples() {
        const response = await baseQueryV1<TCodeExamplesResponse>("texts/code-examples/")
        return response.data
    }

    async fetchCodeExamplesByName(name: string) {
        const response = await baseQueryV1<TCodeExamplesByNameResponse>({
            url: "texts/code-examples/",
            params: {
                "programming-language-name": name
            }
        })
        return response.data
    }

    async fetchCodeExamplesByUUID(uuid: string) {
        const response = await baseQueryV1<TCodeExampleByUUID>({
            url: `texts/code-examples/${uuid}`
        })
        return response.data
    }
}

export default new CodeService()
