import {Image} from "@chakra-ui/react";
import {RefreshIconProps} from "@shared/ui/icons";
import RefreshIconImg from "@shared/assets/refresh.svg"

export const RefreshIcon = (props: RefreshIconProps) => {
    return (
        <Image w="20px" h="20px" {...props} src={RefreshIconImg}/>
    )
}