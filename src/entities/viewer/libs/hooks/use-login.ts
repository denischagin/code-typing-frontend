import { useToast } from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"

import { LoginCredentials, useViewer, ViewerService } from "@entities/viewer"
import { paths } from "@pages/routes"
import { queryKeysEnum } from "@shared/constants"
import { useAxiosErrorToast } from "@shared/libs/hooks/axios-error-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useLogin = () => {
    const { loginViewer } = useViewer()
    const toast = useToast()
    const navigate = useNavigate()
    const errorHandler = useAxiosErrorToast()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (credentials: LoginCredentials) => ViewerService.login(credentials),
        onSuccess: async access => {
            loginViewer(access)
            toast({
                title: "Login successful",
                status: "success"
            })

            await queryClient.invalidateQueries({
                queryKey: [queryKeysEnum.savedResults]
            })

            navigate(paths.typingCodePage, { replace: true })
        },
        onError: errorHandler
    })
}
