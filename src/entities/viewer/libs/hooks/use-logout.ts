// сделать logout c помощью use-logout мутации useMutation из react-query в react
import {useMutation} from "@tanstack/react-query";
import {useViewer, ViewerService} from "@entities/viewer";

export const useLogout = () => {
    const {logoutViewer} = useViewer()
    return useMutation({
        mutationFn: () => ViewerService.logout(),
        onSettled: () => {
            logoutViewer()
        }
    })
}