import {Flex, Grid, GridItem, Stack, Text} from "@chakra-ui/react";
import {Timer} from "@widgets/Timer";
import {TypingCode} from "@widgets/TypingCode";
import {useSearchParams} from "react-router-dom";
import {AsideSettings} from "@widgets/AsideSettings";
import {searchParamsEnum} from "@shared/constants";

const SelectCodeLanguagePage = () => {
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    return (
        <Grid flexGrow="1" minH="100%" maxW="100vw" templateColumns="auto 1fr" gap="10px">
            <GridItem minH="100%">
                <AsideSettings/>
            </GridItem>

            <GridItem minH="100%">
                <Stack minH="100%">
                    <Flex justify="space-between" align="center" px="10px ">
                        <Text fontSize="large" textDecoration="underline">{languageName}</Text>
                        <Timer/>
                    </Flex>

                    <TypingCode/>
                </Stack>
            </GridItem>
        </Grid>
    )
}
export default SelectCodeLanguagePage