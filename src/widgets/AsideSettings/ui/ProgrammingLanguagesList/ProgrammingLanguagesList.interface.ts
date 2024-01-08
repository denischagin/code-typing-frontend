import {IProgrammingLanguage} from "@entities/code";

export interface ProgrammingLanguagesListProps {
    programmingLanguages: IProgrammingLanguage[] | undefined,
    onClick: () => void,
    currentLanguageName: string | null
}