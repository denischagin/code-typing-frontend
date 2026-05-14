import { CodeService } from "@entities/code"
import { queryKeysEnum } from "@shared/constants"
import { useQuery } from "@tanstack/react-query"

export const useGetProgrammingLanguages = (options?: { enabled?: boolean }) => {
    return useQuery({
        queryFn: () => CodeService.fetchProgrammingLanguages(),
        queryKey: [queryKeysEnum.programmingLanguages],
        enabled: options?.enabled
    })
}
