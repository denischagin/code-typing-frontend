import { ChakraProvider, theme } from "@chakra-ui/react"
import { fork } from "effector"
import { Provider } from "effector-react"
import { ReactNode } from "react"

export const Providers = ({ children }: { children: ReactNode }) => {
    const scope = fork()

    return (
        <Provider value={scope}>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </Provider>
    )
}