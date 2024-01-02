import {Button, ButtonGroup, Container, Flex} from "@chakra-ui/react";
import {TypingCode} from "@widgets/TypingCode";
import {useGetProgrammingLanguages} from "@entities/text";
import {Timer} from "@widgets/Timer";

const TypingCodePage = () => {
    const {
        data: programmingLanguages,
    } = useGetProgrammingLanguages()

    return (
        <Container
            display="flex"
            flexDirection="column"
            flexGrow="1"
            maxW="100%"
            minH="100%"
        >
            <Flex justify="end">
                <Timer/>
            </Flex>

            <ButtonGroup>
                {programmingLanguages?.map(({name}) => (
                    <Button>{name}</Button>
                ))}
            </ButtonGroup>

            <TypingCode/>
        </Container>
    )
}

export default TypingCodePage