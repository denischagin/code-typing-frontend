import {ResultsService, TSaveResultBody} from "@entities/results";
import {queryKeysEnum} from "@shared/constants";
import {useAxiosErrorToast} from "@shared/libs/hooks/axios-error-toast";
import {useMutation, useQueryClient} from "@tanstack/react-query";

export const useSaveResult = () => {
    const errorHandler = useAxiosErrorToast()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (body: TSaveResultBody) => ResultsService.saveResult(body),
        onError: errorHandler,
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: [queryKeysEnum.savedResults],
            })
        }
    })
}