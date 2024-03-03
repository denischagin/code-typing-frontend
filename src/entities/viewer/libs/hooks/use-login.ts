import {useMutation} from "@tanstack/react-query";
import {ILoginCredentials, ViewerService} from "@entities/viewer";

export const useLogin = () => {
    return useMutation({
        mutationFn: (credentials: ILoginCredentials) => ViewerService.login(credentials),
    })
}