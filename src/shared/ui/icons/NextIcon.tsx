import {Image} from "@chakra-ui/react";

import {IconProps} from "./Icons.interface.ts";
import nextIcon from '@shared/assets/next.svg'

export const NextIcon = (props: IconProps) => {
    return (
        <Image w="20px" h="20px" src={nextIcon} {...props}/>
    )
}