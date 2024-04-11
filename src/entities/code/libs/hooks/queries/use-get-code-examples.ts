import { CodeExamplesResponse, CodeService } from "@entities/code"
import { queryKeysEnum } from "@shared/constants"
import { useQuery, UseQueryOptions } from "@tanstack/react-query"

export const useGetCodeExamples = (
    options?: Omit<UseQueryOptions<CodeExamplesResponse>, "queryKey">
) => {
    return useQuery({
        queryFn: () => CodeService.fetchCodeExamples(),
        queryKey: [queryKeysEnum.codeExample],
        ...options
    })
}
