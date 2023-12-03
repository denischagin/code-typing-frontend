import {ChakraProvider} from "@chakra-ui/react"
import {ReactNode} from "react"
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient, theme} from "@app/config";

export const Providers = ({children}: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </QueryClientProvider>
    )
}