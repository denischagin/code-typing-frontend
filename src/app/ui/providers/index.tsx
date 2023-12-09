import {ChakraProvider} from "@chakra-ui/react"
import {ReactNode} from "react"
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient, theme} from "@app/config";
import {RouterProvider} from "react-router-dom";
import {router} from "@pages/index.tsx";

export const Providers = ({children}: { children?: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <RouterProvider router={router}/>
                {children}
            </ChakraProvider>
        </QueryClientProvider>
    )
}