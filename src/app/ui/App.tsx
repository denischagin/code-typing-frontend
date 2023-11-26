import {Typing} from "@widgets/Typing";
import {ChakraProvider, Container} from "@chakra-ui/react";
import theme from "@app/config";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Container maxW="1000px">
                <Typing/>
            </Container>
        </ChakraProvider>
    )
}

export default App
