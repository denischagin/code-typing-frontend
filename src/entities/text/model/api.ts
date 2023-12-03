export enum ETextLocale {
    ru = "ru_RU",
    en = "en_EN",
    fr = "fr_FR",
}

export interface ITextRequestParams {
    locale?: ETextLocale
}

export interface IText {
    title?: string
    author?: string
    genre?: string
    content?: string
}

export type TTextResponse = { data: IText[] }