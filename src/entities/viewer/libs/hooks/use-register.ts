import {useMutation} from "@tanstack/react-query";
import {IRegisterCredentials, useViewer, ViewerService} from "@entities/viewer";
import {AxiosError} from "axios";
import {ApiError} from "@shared/api";
import {useToast} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {paths} from "@pages/index.tsx";

export const useRegister = () => {
    const {loginViewer} = useViewer();
    const toast = useToast()
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (credentials: IRegisterCredentials) => ViewerService.register(credentials),
        onSuccess: ({access, refresh}) => {
            loginViewer({accessToken: access, refreshToken: refresh});
            toast({
                title: "Registration successful",
                status: "success",
            })
            navigate(paths.typingCodePage, {replace: true});

        },
        onError: (error: AxiosError<ApiError>) => {
            toast({colorScheme: 'red', title: error.response?.data?.message, status: 'error'})
        }
    })
}