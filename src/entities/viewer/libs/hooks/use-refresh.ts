import {ViewerService} from "@entities/viewer";
import {useMutation} from "@tanstack/react-query";

export const useRefresh = () => {
    return useMutation({
       mutationFn: () => ViewerService.refreshWithCredentials()
    })
}