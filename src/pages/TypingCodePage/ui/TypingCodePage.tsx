import {Container} from "@chakra-ui/react";
import {TypingCode} from "@widgets/TypingCode";

const TypingCodePage = () => {

    return (
        <Container
            display="flex"
            flexDirection="column"
            flexGrow="1"
            maxW="100%"
            minH="100%"
        >
            <TypingCode />
        </Container>
    )
}

export default TypingCodePage