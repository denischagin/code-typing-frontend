import {Button, Container, Flex, Progress} from "@chakra-ui/react";
import {Timer} from "@widgets/Timer/ui/Timer.tsx";
import {Typing} from "@widgets/Typing";
import {useGetTextQuery} from "@entities/text/libs/hooks/use-get-text-query.ts";

export const TypingPage = () => {
    const {isFetching, refetch} = useGetTextQuery()

    const handleNewTextClick = async () => {
        await refetch()
    };

    return (
        <Container maxW="1000px">
            <Flex justify="space-between" align="center">
                <Timer/>

                <Button onClick={handleNewTextClick}>
                    Новый текст
                </Button>
            </Flex>

            {isFetching && <Progress isIndeterminate/>}

            <Typing/>
        </Container>
    )
}