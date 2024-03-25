import {Text} from "@chakra-ui/react";

import {TimerItemProps} from "@shared/ui/timer";

export const TimerItem = ({time, postfix, required = true}: TimerItemProps) => {
    return (
        (!!time || required) && (
            <Text fontSize="x-large">
                {time}<Text as="span" fontSize="large">{postfix}</Text>
            </Text>
        )
    )
}