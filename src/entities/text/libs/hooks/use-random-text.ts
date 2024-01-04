import {useGetCodeExamples, useGetCodeExamplesByName} from "@entities/text";
import {getRandomNumber} from "@shared/libs";
import {useMemo} from "react";
import {useSearchParams} from "react-router-dom";
import {searchParamsEnum} from "@shared/constants";

export const useRandomText = (): string | undefined => {
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    const {data: codesByName} = useGetCodeExamplesByName(languageName, !!languageName)
    const {data: codes} = useGetCodeExamples(!languageName)

    const codesForRandom = codesByName ? codesByName : codes

    return useMemo(() => codesForRandom?.[getRandomNumber(0, codesForRandom?.length - 1)]?.content, [codesForRandom])
}