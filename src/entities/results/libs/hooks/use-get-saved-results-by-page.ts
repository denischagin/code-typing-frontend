import { useEffect, useState } from "react"

import { GetSavedResultsResponse, ResultParams, ResultsService } from "@entities/results"
import { useViewer } from "@entities/viewer"
import { queryKeysEnum } from "@shared/constants"
import { useQuery, UseQueryResult } from "@tanstack/react-query"

export type UseGetSavedResultsReturn = UseQueryResult<GetSavedResultsResponse> & {
    totalPages: number
}

export const useGetSavedResultsByPage = (params: ResultParams): UseGetSavedResultsReturn => {
    const { accessToken } = useViewer()
    const [totalPages, setTotalPages] = useState<number>(0)

    const query = useQuery({
        queryFn: () => ResultsService.fetchSavedResults(params),
        queryKey: [queryKeysEnum.savedResults, accessToken, params]
    })

    useEffect(() => {
        if (!query.data) return
        setTotalPages(query.data.totalPages)
    }, [query.data?.totalPages])

    return { ...query, totalPages }
}
