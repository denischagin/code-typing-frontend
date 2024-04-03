import { CodeService } from "@entities/code"
import { queryKeysEnum } from "@shared/constants"
import { useQuery } from "@tanstack/react-query"

export const useGetCodeExampleByUuid = (uuid: string) => {
    return useQuery({
        queryFn: async () => CodeService.fetchCodeExamplesByUUID(uuid),
        queryKey: [queryKeysEnum.codeExample, uuid]
    })
}
