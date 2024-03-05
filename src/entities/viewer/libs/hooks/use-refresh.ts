import {useMutation} from "@tanstack/react-query";
import {ViewerService} from "@entities/viewer";

export const useRefresh = () => {
    return useMutation({
       mutationFn: () => ViewerService.refreshWithCredentials()
    })
}