import { ReactElement } from "react"

import { ProgrammingLanguage } from "@entities/code"

export interface ProgrammingLanguagesListProps {
    programmingLanguages: ProgrammingLanguage[] | undefined
    renderItem: (props: RenderProgrammingLanguageProps, index: number) => ReactElement
}

export interface RenderProgrammingLanguageProps extends ProgrammingLanguage {
    to: string
    onClick?: () => void
    key?: string
}
