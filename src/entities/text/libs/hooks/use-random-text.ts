import {useGetCodeExamples, useGetCodeExamplesByName} from "@entities/text";
import {getRandomNumber} from "@shared/libs";
import {useMemo} from "react";
import {useParams} from "react-router-dom";

export const useRandomText = (): string | undefined => {
    const {typingCodeName} = useParams()

    const {data: codesByName} = useGetCodeExamplesByName(typingCodeName, !!typingCodeName)
    const {data: codes} = useGetCodeExamples(!typingCodeName)

    const codesForRandom = codesByName ? codesByName : codes

    return useMemo(() => codesForRandom?.[getRandomNumber(0, codesForRandom?.length - 1)]?.content, [codesForRandom])
}