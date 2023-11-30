import { Typing } from "@widgets/Typing";
import { Container } from "@chakra-ui/react";
import { Providers } from "./providers";
import { Timer } from "@widgets/Timer/ui/Timer";

function App() {
    return (
        <Providers>
            <Container maxW="1000px">
                <Timer />
                <Typing />
            </Container>
        </Providers>
    )
}

export default App
