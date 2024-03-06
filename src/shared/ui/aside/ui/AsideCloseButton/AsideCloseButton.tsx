import { Button } from "@chakra-ui/react";

import { AsideCloseButtonProps, useAside } from "@shared/ui/aside";

export const AsideCloseButton = (props: AsideCloseButtonProps) => {
    const { onChangeTabIndex } = useAside()

    const handleHideClick = () => {
        onChangeTabIndex && onChangeTabIndex(null)
    }

    return (
        <Button onClick={handleHideClick} {...props} />
    )
}
