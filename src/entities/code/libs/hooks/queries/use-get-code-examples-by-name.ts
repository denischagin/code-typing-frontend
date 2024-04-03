import { CodeService } from "@entities/code"
import { queryKeysEnum } from "@shared/constants"
import { useQuery } from "@tanstack/react-query"

export const useGetCodeExamplesByName = (name: string | undefined, enabled: boolean = true) => {
    return useQuery({
        queryFn: () => (name ? CodeService.fetchCodeExamplesByName(name) : null),
        queryKey: [queryKeysEnum.codeExample, name],
        enabled: !!name && enabled
    })
}
