import {useQuery} from "@tanstack/react-query";
import {TextService} from "@entities/text";
import {queryKeysEnum} from "@shared/constants";

export const useGetProgrammingLanguages = () => {
    return useQuery({
        queryFn: () => TextService.fetchProgrammingLanguages(),
        queryKey: [queryKeysEnum.programmingLanguages]
    })
}