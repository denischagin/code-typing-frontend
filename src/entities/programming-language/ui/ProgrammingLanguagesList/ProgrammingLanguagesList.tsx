import { forwardRef } from "react"

import { Stack } from "@chakra-ui/react"

import {
    getProgrammingLanguageLink,
    ProgrammingLanguagesListProps
} from "@entities/programming-language"

export const ProgrammingLanguagesList = forwardRef<HTMLDivElement, ProgrammingLanguagesListProps>(
    (props, ref) => {
        const { programmingLanguages, renderItem } = props

        if (!programmingLanguages) return null

        return (
            <Stack overflowY="scroll" pr="10px" ref={ref}>
                {programmingLanguages.length !== 0 &&
                    programmingLanguages?.map((programmingLanguage, index) =>
                        renderItem(
                            {
                                to: getProgrammingLanguageLink(programmingLanguage.name),
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
