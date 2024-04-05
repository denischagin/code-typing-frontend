export interface ProgrammingLanguage {
    UUID: string
    name: string
    logo: string
}

export type ProgrammingLanguageResponse = ProgrammingLanguage[]

export interface CodeExample {
    UUID: string
    content: string
}

export type CodeExampleByUUID = CodeExample
export type CodeExamplesByNameResponse = CodeExample[]
export type CodeExamplesResponse = CodeExample[]

export interface CustomCodeExampleBody {
    programmingLanguageUUID: string
    content: string
}
