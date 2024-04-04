import { Tooltip } from "@chakra-ui/react"

import { useTerminalHandlers, useTerminalIsOpen } from "@entities/terminal"
import { AsideTab } from "@shared/ui/aside"
import { TerminalIcon } from "@shared/ui/icons"

export const TerminalTab = () => {
    const isOpenTerminal = useTerminalIsOpen()
    const { toggleTerminal } = useTerminalHandlers()

    return (
        <Tooltip label="Info (Ctrl + `; Alt + F12)">
            <div>
                <AsideTab isActive={isOpenTerminal} onClick={toggleTerminal}>
                    <TerminalIcon />
                </AsideTab>
            </div>
        </Tooltip>
    )
}
