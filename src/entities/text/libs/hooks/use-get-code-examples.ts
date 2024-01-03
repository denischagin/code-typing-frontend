import {useQuery} from "@tanstack/react-query";
import {TextService} from "@entities/text";
import {queryKeysEnum} from "@shared/constants";

export const useGetCodeExamples = (enabled: boolean = true) => {
    return useQuery({
        queryFn: () => TextService.fetchCodeExamples(),
        queryKey: [queryKeysEnum.codeExample],
        enabled,
    })
}