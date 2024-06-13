import { useSearchParams } from "react-router-dom"

import { searchParamsEnum } from "@shared/constants"

export const useLanguageNameSearch = () => {
    const [searchParams] = useSearchParams()

    const languageName = searchParams.get(searchParamsEnum.languageName)

    return languageName
}
