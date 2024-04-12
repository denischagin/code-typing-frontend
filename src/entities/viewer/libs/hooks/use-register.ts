import { useToast } from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"

import { RegisterCredentials, useViewer, ViewerService } from "@entities/viewer"
import { paths } from "@pages/routes"
import { useAxiosErrorToast } from "@shared/libs/hooks/axios-error-toast"
import { useMutation } from "@tanstack/react-query"

export const useRegister = () => {
    const { loginViewer } = useViewer()
    const toast = useToast()
    const navigate = useNavigate()

    const errorHandler = useAxiosErrorToast()

    return useMutation({
        mutationFn: (credentials: RegisterCredentials) => ViewerService.register(credentials),
        onSuccess: async access => {
            loginViewer(access)
            toast({
                title: "Registration successful",
                status: "success"
            })
            navigate(paths.typingCodePage, { replace: true })
        },
        onError: errorHandler
    })
}
