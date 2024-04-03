import { CodeService } from "@entities/code"
import { queryKeysEnum } from "@shared/constants"
import { useQuery } from "@tanstack/react-query"

export const useGetCodeExamples = (enabled: boolean = true) => {
    return useQuery({
        queryFn: () => CodeService.fetchCodeExamples(),
        queryKey: [queryKeysEnum.codeExample],
        enabled
    })
}
