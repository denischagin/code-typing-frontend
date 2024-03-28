import {Image} from "@chakra-ui/react";

import {IconProps} from "./Icons.interface.ts";
import refreshIconImg from "@shared/assets/refresh.svg"

export const RefreshIcon = (props: IconProps) => {
    return (
        <Image w="20px" h="20px" {...props} src={refreshIconImg}/>
    )
}