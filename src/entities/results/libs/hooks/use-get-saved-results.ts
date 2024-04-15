import { ResultParams, ResultsService } from "@entities/results"
import { useViewer } from "@entities/viewer"
import { queryKeysEnum } from "@shared/constants"
import { useQuery } from "@tanstack/react-query"

export const useGetSavedResults = (params: ResultParams) => {
    const { accessToken } = useViewer()

    return useQuery({
        queryFn: () => ResultsService.fetchSavedResults(params),
        queryKey: [queryKeysEnum.savedResults, accessToken, params]
    })
}
