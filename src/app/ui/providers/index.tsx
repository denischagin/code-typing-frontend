import { ChakraProvider, theme } from "@chakra-ui/react"
import { CursorPositionProvider } from "@entities/cursor"
import { ReactNode } from "react"

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <ChakraProvider theme={theme}>
            <CursorPositionProvider>
                {children}
            </CursorPositionProvider>
        </ChakraProvider>
    )
}