import { Flex } from "@chakra-ui/react"

import { useOpenHelpModal } from "./TypingCodePage.hooks"
import { TypingCodeProviders } from "@entities/code"
import { useTerminalHandlers, useTerminalIsOpen, useTerminalKeyDown } from "@entities/terminal"
import { Terminal } from "@shared/ui/terminal"
import { AsideSettings } from "@widgets/AsideSettings"
import { HelpModal } from "@widgets/HelpModal"
import { TypingCode } from "@widgets/TypingCode"
import { TypingCodePanel } from "@widgets/TypingCodePanel"

const TypingCodePage = () => {
    const isOpenTerminal = useTerminalIsOpen()
    const { closeTerminal } = useTerminalHandlers()

    const { handleCloseHelpModal, isOpenHelpModal } = useOpenHelpModal()

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
            <HelpModal isOpen={isOpenHelpModal} onClose={handleCloseHelpModal} />
        </TypingCodeProviders>
    )
}
export default TypingCodePage
