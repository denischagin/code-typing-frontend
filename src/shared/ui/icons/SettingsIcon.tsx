import { Image } from "@chakra-ui/react"

import settingsIcon from "@shared/assets/settings.svg"
import { IconProps } from "@shared/ui/icons"

export const SettingsIcon = (props: IconProps) => {
    return <Image w="20px" h="20px" src={settingsIcon} alt="terminal icon" {...props} />
}
