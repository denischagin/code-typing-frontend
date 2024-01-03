import {Button} from "@chakra-ui/react";
import {AsideCloseButtonProps, useAside} from "@shared/ui/aside";

export const AsideCloseButton = (props: AsideCloseButtonProps) => {
    const {onClose} = useAside()

    return (
        <Button onClick={onClose} {...props}/>
    )
}