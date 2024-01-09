import {Flex} from "@chakra-ui/react";
import {TypingCode} from "@widgets/TypingCode";
import {AsideSettings} from "@widgets/AsideSettings";
import {TypingCodePanel} from "@widgets/TypingCodePanel";
import {TypingCodeProviders} from "@entities/code";

const TypingCodePage = () => {
    return (
        <TypingCodeProviders>
            <Flex justify="start" flexGrow="1" maxW="100vw" gap="10px" overflow="hidden">
                <AsideSettings/>

                <Flex flex="1" direction="column">
                    <TypingCodePanel/>

                    <TypingCode/>
                </Flex>
            </Flex>
        </TypingCodeProviders>
    )
}
export default TypingCodePage