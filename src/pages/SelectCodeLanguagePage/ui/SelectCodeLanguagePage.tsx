import {Flex, Grid, GridItem, Stack, Text} from "@chakra-ui/react";
import {Timer} from "@widgets/Timer";
import {AsideSelectLanguage} from "@widgets/AsideSelectLanguage";
import {TypingCode} from "@widgets/TypingCode";
import {useParams} from "react-router-dom";

const SelectCodeLanguagePage = () => {
    const {typingCodeName} = useParams()

    return (
        <Grid flexGrow="1" minH="100%" maxW="100vw" templateColumns="auto 1fr" gap="10px">
            <GridItem minH="100%">
                <AsideSelectLanguage/>
            </GridItem>

            <GridItem minH="100%">
                <Stack minH="100%">
                    <Flex justify="space-between" align="center" px="10px ">
                        <Text fontSize="large" textDecoration="underline">{typingCodeName}</Text>
                        <Timer/>
                    </Flex>

                    <TypingCode/>
                </Stack>
            </GridItem>
        </Grid>
    )
}
export default SelectCodeLanguagePage