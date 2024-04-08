import { Flex } from "@chakra-ui/react"

import { TypingCodeProviders } from "@entities/code"
import { useTerminalHandlers, useTerminalIsOpen, useTerminalKeyDown } from "@entities/terminal"
import { Terminal } from "@shared/ui/terminal"
import { AsideSettings } from "@widgets/AsideSettings"
import { TypingCode } from "@widgets/TypingCode"
import { TypingCodePanel } from "@widgets/TypingCodePanel"

const TypingCodePage = () => {
    const isOpenTerminal = useTerminalIsOpen()
    const { closeTerminal } = useTerminalHandlers()

    useTerminalKeyDown()

    return (
        <TypingCodeProviders>
            <Flex justify="start" flexGrow="1" maxW="100vw" gap="10px" overflow="hidden">
                <AsideSettings />

                <Flex flex="1" direction="column" py="5px" ml="10px">
                    <TypingCodePanel />

                    <TypingCode />
                </Flex>
            </Flex>

            <Terminal onClose={closeTerminal} isOpen={isOpenTerminal} />
        </TypingCodeProviders>
    )
}
export default TypingCodePage
