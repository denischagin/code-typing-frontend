import {useQuery} from "@tanstack/react-query";
import {ResultsService} from "@entities/results";
import {queryKeysEnum} from "@shared/constants";

export const useGetSavedResults = () => {
    return useQuery({
        queryFn: () => ResultsService.fetchSavedResults(),
        queryKey: [queryKeysEnum.savedResults]
    })
}