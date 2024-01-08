import {useQuery} from "@tanstack/react-query";
import {queryKeysEnum} from "@shared/constants";
import {CodeService} from "@entities/code";

export const useGetCodeExamplesByName = (name: string | undefined, enabled: boolean = true) => {
    return useQuery({
        queryFn: () => name ? CodeService.fetchCodeExamplesByName(name) : null,
        queryKey: [queryKeysEnum.codeExample, name],
        enabled: !!name && enabled
    })
}