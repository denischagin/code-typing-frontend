import {useToast} from "@chakra-ui/react";

import {useSearchParams} from "react-router-dom";

import {defaultTexts, useGetCodeExamples, useGetCodeExamplesByName} from "@entities/code";
import {searchParamsEnum} from "@shared/constants";
import {useRandom} from "@shared/libs/hooks/random";

export const useRandomCodeWithSearchParam = (): [textContent: string | undefined, newText: () => void, id?: string] => {
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    const toast = useToast()

    const {data: codesByName} = useGetCodeExamplesByName(languageName!, !!languageName)
    const {data: codes} = useGetCodeExamples(!languageName)

    const codesForRandom = codesByName ? codesByName : codes

    const [randomText, newText] = useRandom(codesForRandom)

    const handleNewTextWithoutNetwork = () => {
        toast({
            title: "No network",
            description: "You are offline. Only one code can be generated",
            status: "warning",
        })
    }

    if (!randomText) {
        return [defaultTexts, handleNewTextWithoutNetwork]
    }
    return [randomText?.content, newText, randomText?.UUID]
}