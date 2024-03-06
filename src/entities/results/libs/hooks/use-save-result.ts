import {ResultsService, TSaveResultBody} from "@entities/results";
import {useMutation} from "@tanstack/react-query";

export const useSaveResult = () => {
    return useMutation({
        mutationFn: (body: TSaveResultBody) => ResultsService.saveResult(body),
    })
}