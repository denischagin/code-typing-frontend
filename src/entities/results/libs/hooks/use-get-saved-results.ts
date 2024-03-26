import {ResultsService} from "@entities/results";
import {useViewer} from "@entities/viewer";
import {queryKeysEnum} from "@shared/constants";
import {useQuery} from "@tanstack/react-query";

export const useGetSavedResults = () => {
    const {accessToken} = useViewer()

    return useQuery({
        queryFn: () => ResultsService.fetchSavedResults(),
        queryKey: [queryKeysEnum.savedResults, accessToken],
    })
}