import { Box, Image, Tooltip } from "@chakra-ui/react"

import { useSearchParams } from "react-router-dom"

import { useGetProgrammingLanguages } from "@entities/code"
import programmingLanguageIcon from "@shared/assets/programming-language.svg"
import { searchParamsEnum, settingTabs } from "@shared/constants"
import { AsideTab } from "@shared/ui/aside"

export const LanguageTab = () => {
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    const { data: programmingLanguages } = useGetProgrammingLanguages()

    const currentCodeIcon = programmingLanguages?.find(
        language => language.name === languageName
    )?.logo

    return (
        <Tooltip label={languageName ? `Current language: ${languageName}` : "Select language"}>
            <Box>
                <AsideTab name={settingTabs.language} cursor="pointer">
                    <Image
                        w="50px"
                        color="main.900"
                        src={currentCodeIcon ? currentCodeIcon : programmingLanguageIcon}
                    />
                </AsideTab>
            </Box>
        </Tooltip>
    )
}
