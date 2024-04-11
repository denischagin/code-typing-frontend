import { CodeExamplesByNameResponse, CodeService } from "@entities/code"
import { queryKeysEnum } from "@shared/constants"
import { useQuery, UseQueryOptions } from "@tanstack/react-query"

export const useGetCodeExamplesByName = (
    name: string,
    options?: Omit<UseQueryOptions<CodeExamplesByNameResponse>, "queryKey">
) => {
    return useQuery({
        queryFn: () => CodeService.fetchCodeExamplesByName(name),
        queryKey: [queryKeysEnum.codeExample, name],
        ...options
    })
}
