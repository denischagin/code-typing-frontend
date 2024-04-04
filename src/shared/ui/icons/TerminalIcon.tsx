import { Image } from "@chakra-ui/react"

import terminalIcon from "@shared/assets/terminal.svg"
import { IconProps } from "@shared/ui/icons"

export const TerminalIcon = (props: IconProps) => {
    return <Image w="20px" h="20px" src={terminalIcon} alt="terminal icon" {...props} />
}
