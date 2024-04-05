import {
    CodeExampleByUUID,
    CodeExamplesByNameResponse,
    CodeExamplesResponse,
    CustomCodeExampleBody,
    ProgrammingLanguageResponse
} from "@entities/code"
import { baseQueryV1 } from "@shared/api"

class CodeService {
    async fetchProgrammingLanguages() {
        const response = await baseQueryV1<ProgrammingLanguageResponse>(
            "texts/programming-languages/"
        )
        return response.data
    }

    async fetchCodeExamples() {
        const response = await baseQueryV1<CodeExamplesResponse>("texts/code-examples/")
        return response.data
    }

    async fetchCodeExamplesByName(name: string) {
        const response = await baseQueryV1<CodeExamplesByNameResponse>({
            url: "texts/code-examples/",
            params: {
                "programming-language-name": name
            }
        })
        return response.data
    }

    async fetchCodeExamplesByUUID(uuid: string) {
        const response = await baseQueryV1<CodeExampleByUUID>({
            url: `texts/code-examples/${uuid}`
        })
        return response.data
    }

    async addCustomCodeExample(body: CustomCodeExampleBody) {
        const response = await baseQueryV1<CodeExampleByUUID>({
            url: `texts/code-examples`,
            method: "POST",
            data: body
        })
        return response.data
    }
}

export default new CodeService()
