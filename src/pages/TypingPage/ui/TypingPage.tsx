import {Container, Flex, HStack, Progress} from "@chakra-ui/react";

import {useGetTextQuery} from "@entities/text";
import {SelectChangeLanguage} from "@features/change-language";
import {ButtonNewText} from "@features/new-text";
import {ButtonRepeatText} from "@features/repeat-text";
import {ResultSpeed} from "@widgets/ResultSpeed";
import {Typing} from "@widgets/Typing";

const TypingPage = () => {
    const {isFetching} = useGetTextQuery()

    return (
        <Container
            display="flex"
            flexDirection="column"
            flexGrow="1"
            maxW="1000px"
            minH="100%"
        >
            <Flex justify="space-between" align="center">
                <HStack spacing={2}>
                    <ButtonNewText/>
                    <ButtonRepeatText/>
                    <SelectChangeLanguage/>
                </HStack>
            </Flex>

            <ResultSpeed/>

            {isFetching && <Progress mt="10px" isIndeterminate/>}

            <Typing/>
        </Container>
    )
}


export default TypingPage