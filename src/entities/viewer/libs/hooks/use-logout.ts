import {useToast} from "@chakra-ui/react";

import {useViewer, ViewerService} from "@entities/viewer";
import {useMutation} from "@tanstack/react-query";

export const useLogout = () => {
    const toast = useToast();

    const {logoutViewer} = useViewer()
    return useMutation({
        mutationFn: () => ViewerService.logout(),
        onSettled: async () => {
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