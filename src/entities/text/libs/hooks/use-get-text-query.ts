import {useQuery} from "@tanstack/react-query";
import {ITextRequestParams, TextService} from "@entities/text";
import {queryKeys} from "@shared/constants";

export const useGetTextQuery = (params?: ITextRequestParams) => useQuery({
    queryFn: () => TextService.fetchText(params),
    queryKey: [queryKeys.text]
})