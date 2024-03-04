import {useMutation} from "@tanstack/react-query";
import {ILoginCredentials, useViewer, ViewerService} from "@entities/viewer";
import {useToast} from "@chakra-ui/react";
import {AxiosError} from "axios";
import {ApiError} from "@shared/api";
import {useNavigate} from "react-router-dom";
import {paths} from "@pages/index.tsx";

export const useLogin = () => {
    const {loginViewer} = useViewer()
    const toast = useToast()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (credentials: ILoginCredentials) => ViewerService.login(credentials),
        onSuccess: ({access, refresh}) => {
            loginViewer({refreshToken: access, accessToken: refresh})
            toast({
                title: "Login successful",
                status: "success",
            })
            navigate(paths.typingCodePage, {replace: true})

        },
        onError: (error: AxiosError<ApiError>) => {
            toast({colorScheme: 'red', title: error.response?.data?.message, status: 'error'})
        }
    })
}