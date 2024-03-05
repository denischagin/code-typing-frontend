import {useSearchParams} from "react-router-dom";
import {searchParamsEnum} from "@shared/constants";
import {useRandom} from "@shared/libs/hooks/random";
import {useGetCodeExamples, useGetCodeExamplesByName} from "@entities/code";

export const useRandomCodeWithSearchParam = (): [textContent: string | undefined, newText: () => void, id?: string] => {
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    const {data: codesByName} = useGetCodeExamplesByName(languageName!, !!languageName)
    const {data: codes} = useGetCodeExamples(!languageName)

    const codesForRandom = codesByName ? codesByName : codes

    const [randomText, newText] = useRandom(codesForRandom)
    return [randomText?.content, newText, randomText?.UUID]
}