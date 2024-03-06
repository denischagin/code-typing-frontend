import {useMutation} from "@tanstack/react-query";
import {ILoginCredentials, useViewer, ViewerService} from "@entities/viewer";
import {useToast} from "@chakra-ui/react";
import {AxiosError} from "axios";
import {ApiError} from "@shared/api";
import {useNavigate} from "react-router-dom";
import {paths} from "@pages/routes";
import {TokenService} from "@entities/token";

export const useLogin = () => {
    const {loginViewer} = useViewer()
    const toast = useToast()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (credentials: ILoginCredentials) => ViewerService.login(credentials),
        onSuccess: ({access}) => {
            loginViewer()
            toast({
                title: "Login successful",
                status: "success",
            })
            navigate(paths.typingCodePage, {replace: true})
            TokenService.setAccessToken(access)
        },
        onError: (error: AxiosError<ApiError>) => {
            toast({colorScheme: 'red', title: error.response?.data?.message, status: 'error'})
        }
    })
}