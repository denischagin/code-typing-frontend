import {useQuery} from "@tanstack/react-query";
import {queryKeysEnum} from "@shared/constants";
import {CodeService} from "@entities/code";

export const useGetCodeExamples = (enabled: boolean = true) => {
    return useQuery({
        queryFn: () => CodeService.fetchCodeExamples(),
        queryKey: [queryKeysEnum.codeExample],
        enabled,
    })
}