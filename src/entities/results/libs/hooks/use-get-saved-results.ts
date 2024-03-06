import {ResultsService} from "@entities/results";
import {queryKeysEnum} from "@shared/constants";
import {useQuery} from "@tanstack/react-query";

export const useGetSavedResults = () => {
    return useQuery({
        queryFn: () => ResultsService.fetchSavedResults(),
        queryKey: [queryKeysEnum.savedResults]
    })
}