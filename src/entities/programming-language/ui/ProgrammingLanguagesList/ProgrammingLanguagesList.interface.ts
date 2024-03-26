import {ReactElement} from "react";

import {IProgrammingLanguage} from "@entities/code";

export interface ProgrammingLanguagesListProps {
    programmingLanguages: IProgrammingLanguage[] | undefined,
    renderItem: (props: RenderProgrammingLanguageProps) => ReactElement
}

export interface RenderProgrammingLanguageProps extends IProgrammingLanguage {
    to: string,
    onClick?: () => void,
    key?: string,
}