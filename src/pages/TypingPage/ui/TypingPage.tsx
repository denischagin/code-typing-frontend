import {Container, Flex, Progress} from "@chakra-ui/react";
import {Timer} from "@widgets/Timer";
import {Typing} from "@widgets/Typing";
import {useGetTextQuery} from "@entities/text";
import {ButtonNewText} from "@features/new-text";

export const TypingPage = () => {
    const {isFetching} = useGetTextQuery()

    return (
        <Container maxW="1000px">
            <Flex justify="space-between" align="center">
                <Timer/>

                <ButtonNewText/>
            </Flex>

            {isFetching && <Progress isIndeterminate/>}

            <Typing/>
        </Container>
    )
}