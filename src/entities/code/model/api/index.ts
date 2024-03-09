export interface IProgrammingLanguage {
    UUID: string
    name: string
    logo: string
}

export type TProgrammingLanguageResponse = IProgrammingLanguage[]

export interface ICodeExample {
    UUID: string
    content: string
}

export type TCodeExampleByUUID = ICodeExample
export type TCodeExamplesByNameResponse = ICodeExample[]
export type TCodeExamplesResponse = ICodeExample[]
