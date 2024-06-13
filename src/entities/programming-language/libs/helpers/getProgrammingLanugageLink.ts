import { searchParamsEnum } from "@shared/constants"

export const getProgrammingLanguageLink = (name: string) =>
    `?${searchParamsEnum.languageName}=${encodeURIComponent(name)}`
