import { useToast, UseToastOptions } from "@chakra-ui/react"

import { ApiError } from "@shared/api"
import { AxiosError } from "axios"

const toastStyles: UseToastOptions = {
    colorScheme: "red",
    status: "error"
}

export const useAxiosErrorToast = () => {
    const toast = useToast()

    return (error: AxiosError<ApiError>) => {
        const errorTitle = error.response?.data?.message

        if (!errorTitle) return toast({ ...toastStyles, title: "Something went wrong!" })

        toast({ colorScheme: "red", title: error.response?.data?.message, status: "error" })
    }
}
