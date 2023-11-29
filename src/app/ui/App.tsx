import { Typing } from "@widgets/Typing";
import { Container } from "@chakra-ui/react";
import { Providers } from "./providers";

function App() {
    return (
        <Providers>
            <Container maxW="1000px">
                <Typing />
            </Container>
        </Providers>
    )
}

export default App
