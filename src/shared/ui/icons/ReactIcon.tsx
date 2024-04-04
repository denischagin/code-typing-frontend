import { Image } from "@chakra-ui/react"

import reactIcon from "@shared/assets/react.svg"
import { IconProps } from "@shared/ui/icons"

export const ReactIcon = (props: IconProps) => {
    return <Image h="20px" w="20px" src={reactIcon} alt="React icon" {...props} />
}
