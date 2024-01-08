import {useQuery} from "@tanstack/react-query";
import {queryKeysEnum} from "@shared/constants";
import {CodeService} from "@entities/code";

export const useGetProgrammingLanguages = () => {
    return useQuery({
        queryFn: () => CodeService.fetchProgrammingLanguages(),
        queryKey: [queryKeysEnum.programmingLanguages]
    })
}