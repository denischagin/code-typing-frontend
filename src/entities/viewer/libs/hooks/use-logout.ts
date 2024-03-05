import {useMutation} from "@tanstack/react-query";
import {useViewer, ViewerService} from "@entities/viewer";
import {useToast} from "@chakra-ui/react";

export const useLogout = () => {
    const toast = useToast();

    const {logoutViewer} = useViewer()
    return useMutation({
        mutationFn: () => ViewerService.logout(),
        onSettled: () => {
            logoutViewer()
        },
        onSuccess: () => {
            toast({
                title: "Logout successful",
                status: "success",
            })
        }
    })
}