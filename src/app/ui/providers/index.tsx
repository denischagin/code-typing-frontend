import {ChakraProvider, theme} from "@chakra-ui/react"
import {fork} from "effector"
import {Provider} from "effector-react"
import {ReactNode} from "react"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export const Providers = ({children}: { children: ReactNode }) => {
    const queryClient = new QueryClient()
    const scope = fork()

    return (
        <QueryClientProvider client={queryClient}>
            <Provider value={scope}>
                <ChakraProvider theme={theme}>
                    {children}
                </ChakraProvider>
            </Provider>
        </QueryClientProvider>
    )
}