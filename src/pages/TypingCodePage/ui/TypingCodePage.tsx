import {Grid, GridItem} from "@chakra-ui/react";
import {TypingCode, TypingCodeProvider} from "@widgets/TypingCode";
import {AsideSettings} from "@widgets/AsideSettings";
import {TypingCodePanel} from "@widgets/TypingCodePanel/ui/TypingCodePanel.tsx";

const TypingCodePage = () => {
    return (
        <TypingCodeProvider>
            <Grid flexGrow="1" h="100%" maxW="100vw" templateColumns="auto 1fr" gap="10px">
                <GridItem h="100%">
                    <AsideSettings/>
                </GridItem>

                <GridItem>
                    <Grid templateRows="auto 83vh">
                        <GridItem>
                            <TypingCodePanel/>
                        </GridItem>

                        <GridItem>
                            <TypingCode/>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </TypingCodeProvider>
    )
}
export default TypingCodePage