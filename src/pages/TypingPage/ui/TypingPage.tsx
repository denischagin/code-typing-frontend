import {Container, Divider, Flex, Progress} from "@chakra-ui/react";
import {Timer} from "@widgets/Timer";
import {Typing} from "@widgets/Typing";
import {useGetTextQuery} from "@entities/text";
import {ButtonNewText} from "@features/new-text";
import {ButtonRepeatText} from "@features/repeat-text";
import {ResultSpeed} from "@widgets/ResultSpeed";

const TypingPage = () => {
    const {isFetching} = useGetTextQuery()

    return (
        <Container maxW="1000px">
            <Flex justify="space-between" align="center">
                <Timer/>

                <Flex gap="5px">
                    <ButtonNewText/>
                    <ButtonRepeatText/>
                </Flex>
            </Flex>

            {isFetching && <Progress mt="10px" isIndeterminate/>}

            <Typing/>

            <Divider my={4}/>

            <ResultSpeed/>
        </Container>
    )
}

export default TypingPage