import {Typing} from "@widgets/Typing";
import {ChakraProvider, Container} from "@chakra-ui/react";
import theme from "@app/config";
import {createContext, useState} from "react";

export interface ICursorPosition {
    left: number,
    top: number
}

export const CursorPositionContext =
    createContext({
        left: 0, top: 0, handleChangePosition: (top: number, left: number) => {
        }
    })

function App() {

    const [{top, left}, setCursorPosition] =
        useState<ICursorPosition>({left: 0, top: 0})

    const handleChangePosition = (top: number, left: number) => {
        setCursorPosition({
            top, left
        })
    }

    return (
        <ChakraProvider theme={theme}>
            <Container maxW="1000px">
                <CursorPositionContext.Provider value={{top, left, handleChangePosition}}>
                    <Typing/>
                </CursorPositionContext.Provider>
            </Container>
        </ChakraProvider>
    )
}

export default App
