export enum ETextLocale {
    ru = "ru_RU",
    en = "en_EN",
    fr = "fr_FR",
}

export interface ITextRequestParams {
    _locale?: ETextLocale
}

export interface IText {
    title?: string
    author?: string
    genre?: string
    content?: string
}

export type TTextResponse = { data: IText[] }

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

export type TCodeExamplesByNameResponse = ICodeExample[]
export type TCodeExamplesResponse = ICodeExample[]


