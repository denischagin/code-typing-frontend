import {Button, Tooltip} from "@chakra-ui/react";

import {AsideCloseButtonProps, useAside} from "@shared/ui/aside";

export const AsideCloseButton = (props: AsideCloseButtonProps) => {
    const {onChangeTabIndex} = useAside()

    const handleHideClick = () => {
        onChangeTabIndex && onChangeTabIndex(null)
    }

    return (
        <Tooltip label="Hide">
            <div>
                <Button
                    onClick={handleHideClick}
                    size="xs"
                    variant="outline"
                    {...props}
                />
            </div>
        </Tooltip>

    )
}
