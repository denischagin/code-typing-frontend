import { forwardRef } from "react"

import { Stack } from "@chakra-ui/react"

import { ProgrammingLanguagesListProps } from "@entities/programming-language"
import { searchParamsEnum } from "@shared/constants"

export const ProgrammingLanguagesList = forwardRef<HTMLDivElement, ProgrammingLanguagesListProps>(
    (props, ref) => {
        const { programmingLanguages, renderItem } = props

        if (!programmingLanguages) return null

        const getLinkByName = (name: string) =>
            `?${searchParamsEnum.languageName}=${encodeURIComponent(name)}`

        return (
            <Stack overflowY="scroll" pr="10px" ref={ref}>
                {programmingLanguages.length !== 0 &&
                    programmingLanguages?.map((programmingLanguage, index) =>
                        renderItem(
                            {
                                to: getLinkByName(programmingLanguage.name),
                                key: programmingLanguage.UUID,
                                ...programmingLanguage
                            },
                            index
                        )
                    )}
            </Stack>
        )
    }
)
