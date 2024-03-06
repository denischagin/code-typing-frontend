import {useMemo} from "react";

import {$resultsStore, IResult} from "@entities/results";
import {useUnit} from "effector-react";

export interface UseFindResultByIdReturn {
    result: IResult
    resultIndex: number
}

export const useFindResultById = (resultId: string | null): UseFindResultByIdReturn | null => {
    const results = useUnit($resultsStore)

    const currentResultIndex = useMemo(() => {
        return resultId !== null
            ? results?.findIndex((result) => result.resultId === resultId)
            : undefined
    }, [results, resultId])


    return currentResultIndex !== undefined && results !== null
        ? {
            result: results[currentResultIndex],
            resultIndex: currentResultIndex
        }
        : null
}

