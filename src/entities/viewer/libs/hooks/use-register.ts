import {useMutation} from "@tanstack/react-query";
import {ViewerService, IRegisterCredentials} from "@entities/viewer";

export const useRegister = () => {
    return useMutation({
        mutationFn: (credentials: IRegisterCredentials) => ViewerService.register(credentials),
    })
}