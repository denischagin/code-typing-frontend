import {useToast} from "@chakra-ui/react";

import {useSearchParams} from "react-router-dom";

import {defaultTexts, useGetCodeExamples, useGetCodeExamplesByName} from "@entities/code";
import {searchParamsEnum} from "@shared/constants";
import {useRandom} from "@shared/libs/hooks/random";

export const useRandomCodeWithSearchParam = (): [textContent: string | undefined, newText: () => void, id?: string] => {
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    const toast = useToast()

    const {data: codesByName, isError: isErrorByName} = useGetCodeExamplesByName(languageName!, !!languageName)
    const {data: codes, isError: isErrorAll} = useGetCodeExamples(!languageName)

    const codesForRandom = codesByName ? codesByName : codes

    const [randomText, newText] = useRandom(codesForRandom)
    const [defaultRandomText, newDefaultRandomText] = useRandom(defaultTexts)

    const handleNewTextWithoutNetwork = () => {
        toast({
            title: "No network",
            description: `Backend not found :(. Only ${defaultTexts.length} texts are available.`,
            status: "warning",
        })
        newDefaultRandomText()
    }

    if (isErrorByName || isErrorAll) {
        return [defaultRandomText, handleNewTextWithoutNetwork]
    }
    return [randomText?.content, newText, randomText?.UUID]
}