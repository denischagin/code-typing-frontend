import { useToast } from "@chakra-ui/react"

import { useSearchParams } from "react-router-dom"

import { defaultTexts, useGetCodeExamples, useGetCodeExamplesByName } from "@entities/code"
import { searchParamsEnum } from "@shared/constants"
import { useRandom } from "@shared/libs/hooks/random"

export type UseRandomCodeWithSearchReturn = [
    textContent: string | undefined,
    options: UseRandomCodeWithSearchReturnOptions
]

export interface UseRandomCodeWithSearchReturnOptions {
    isPending: boolean
    newText: () => void
    id: string | undefined
}

export const useRandomCodeWithSearchParam = (): UseRandomCodeWithSearchReturn => {
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    const toast = useToast()

    const {
        data: codesByName,
        isError: isErrorByName,
        isLoading: isLoadingByName
    } = useGetCodeExamplesByName(languageName!, !!languageName)

    const {
        data: codes,
        isError: isErrorAll,
        isLoading: isLoadingAll
    } = useGetCodeExamples(!languageName)

    const codesForRandom = codesByName ? codesByName : codes

    const [randomText, newText] = useRandom(codesForRandom)
    const [defaultRandomText, newDefaultRandomText] = useRandom(defaultTexts)

    const handleNewTextWithoutNetwork = () => {
        toast({
            title: "No network",
            description: `Backend not found :(. Only ${defaultTexts.length} texts are available.`,
            status: "warning"
        })
        newDefaultRandomText()
    }

    const isLoading = isLoadingByName || isLoadingAll

    if (isErrorByName || isErrorAll) {
        return [
            defaultRandomText,
            {
                isPending: isLoading,
                newText: handleNewTextWithoutNetwork,
                id: undefined
            }
        ]
    }
    return [
        randomText?.content,
        {
            isPending: isLoading,
            newText,
            id: randomText?.UUID
        }
    ]
}
