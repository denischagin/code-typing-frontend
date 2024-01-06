import {Flex, Grid, GridItem, Text} from "@chakra-ui/react";
import {Timer} from "@widgets/Timer";
import {TypingCode} from "@widgets/TypingCode";
import {useSearchParams} from "react-router-dom";
import {AsideSettings} from "@widgets/AsideSettings";
import {searchParamsEnum} from "@shared/constants";

const TypingCodePage = () => {
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    return (
        <Grid flexGrow="1" h="100%" maxW="100vw" templateColumns="auto 1fr" gap="10px">
            <GridItem h="100%">
                <AsideSettings/>
            </GridItem>

            <GridItem>
                <Grid templateRows="auto 83vh">
                    <GridItem>
                        <Flex justify="space-between" align="center" px="10px ">
                            <Text fontSize="large" textDecoration="underline">{languageName}</Text>
                            <Timer/>
                        </Flex>
                    </GridItem>

                    <GridItem>
                        <TypingCode/>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    )
}
export default TypingCodePage