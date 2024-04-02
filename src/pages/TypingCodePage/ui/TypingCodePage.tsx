import {useEffect, useState} from "react";

import {Flex} from "@chakra-ui/react";

import {TypingCodeProviders} from "@entities/code";
import {Terminal} from "@shared/ui/terminal";
import {AsideSettings} from "@widgets/AsideSettings";
import {TypingCode} from "@widgets/TypingCode";
import {TypingCodePanel} from "@widgets/TypingCodePanel";

const TypingCodePage = () => {
    const [isOpenTerminal, setIsOpenTerminal] = useState(false);
    const toggleTerminal = () => {
        setIsOpenTerminal(prev => !prev);
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "`" && e.ctrlKey || e.altKey && e.key === "F12") {
                toggleTerminal()
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <TypingCodeProviders>
            <Flex justify="start" flexGrow="1" maxW="100vw" gap="10px" overflow="hidden">
                <AsideSettings/>

                <Flex flex="1" direction="column" py="5px" ml="10px">
                    <TypingCodePanel/>

                    <TypingCode/>
                </Flex>
            </Flex>
            {isOpenTerminal && (
                <Terminal/>
            )}
        </TypingCodeProviders>
    )
}
export default TypingCodePage