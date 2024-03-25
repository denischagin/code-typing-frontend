import {Stack} from "@chakra-ui/react";

import programmingLanguageIcon from '@shared/assets/programming-language.svg'
import {searchParamsEnum} from "@shared/constants";
import {ProgrammingLanguagesListProps} from "src/widgets/AsideSettings";

export const ProgrammingLanguagesList = (props: ProgrammingLanguagesListProps) => {
    const {
        programmingLanguages,
        renderItem
    } = props

    if (!programmingLanguages) return null

    const getLinkByName = (name: string) => `?${searchParamsEnum.languageName}=${encodeURIComponent(name)}`

    return (
        <Stack overflowY="scroll" pr="10px">
            {renderItem({
                to: '',
                name: "Random",
                logo: programmingLanguageIcon,
                UUID: "Random"
            })}
            {programmingLanguages.length !== 0 && (
                programmingLanguages?.map((programmingLanguage) => (
                    renderItem({
                        to: getLinkByName(programmingLanguage.name),
                        key: programmingLanguage.UUID,
                        ...programmingLanguage,
                    })
                ))
            )}
        </Stack>
    )
}
