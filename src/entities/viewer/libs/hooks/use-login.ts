import {useToast} from "@chakra-ui/react";

import {useNavigate} from "react-router-dom";

import {TokenService} from "@entities/token";
import {ILoginCredentials, useViewer, ViewerService} from "@entities/viewer";
import {paths} from "@pages/routes";
import {ApiError} from "@shared/api";
import {useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";

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