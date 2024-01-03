import {useQuery} from "@tanstack/react-query";
import {TextService} from "@entities/text";
import {queryKeysEnum} from "@shared/constants";

export const useGetCodeExamplesByName = (name: string | undefined, enabled: boolean = true) => {
    return useQuery({
        queryFn: () => name ? TextService.fetchCodeExamplesByName(name) : null,
        queryKey: [queryKeysEnum.codeExample, name],
        enabled: !!name && enabled
    })
}