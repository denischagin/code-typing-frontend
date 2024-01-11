import {useMutation} from "@tanstack/react-query";
import {ResultsService, TSaveResultBody} from "@entities/results";

export const useSaveResult = () => {
    return useMutation({
        mutationFn: (body: TSaveResultBody) => ResultsService.saveResult(body),
    })
}