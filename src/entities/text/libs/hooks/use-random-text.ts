import {useGetCodeExamples, useGetCodeExamplesByName} from "@entities/text";
import {useSearchParams} from "react-router-dom";
import {searchParamsEnum} from "@shared/constants";
import {useRandom} from "@shared/libs/hooks/random";

export const useRandomText = (): string | undefined => {
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    const {data: codesByName} = useGetCodeExamplesByName(languageName!, !!languageName)
    const {data: codes} = useGetCodeExamples(!languageName)

    const codesForRandom = codesByName ? codesByName : codes

    const randomText = useRandom(codesForRandom)
    return randomText?.content
}