import {Container, Divider, Flex, HStack, Progress} from "@chakra-ui/react";
import {Timer} from "@widgets/Timer";
import {Typing} from "@widgets/Typing";
import {useGetTextQuery} from "@entities/text";
import {ButtonNewText} from "@features/new-text";
import {ButtonRepeatText} from "@features/repeat-text";
import {ResultSpeed} from "@widgets/ResultSpeed";
import {SelectChangeLanguage} from "@features/change-language";

const TypingPage = () => {
    const {isFetching} = useGetTextQuery()

    return (
        <Container maxW="1000px">
            <Flex justify="space-between" align="center">
                <Timer/>

                <HStack spacing={2}>
                    <ButtonNewText/>
                    <ButtonRepeatText/>
                    <SelectChangeLanguage/>
                </HStack>
            </Flex>

            {isFetching && <Progress mt="10px" isIndeterminate/>}

            <Typing/>

            <Divider my={4}/>

            <ResultSpeed/>
        </Container>
    )
}

export default TypingPage