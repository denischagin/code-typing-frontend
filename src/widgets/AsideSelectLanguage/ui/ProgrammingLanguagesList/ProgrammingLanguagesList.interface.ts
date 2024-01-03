import {IProgrammingLanguage} from "@entities/text";

export interface ProgrammingLanguagesListProps {
    programmingLanguages: IProgrammingLanguage[] | undefined,
    onClick: () => void,
    currentLanguageName: string | null
}