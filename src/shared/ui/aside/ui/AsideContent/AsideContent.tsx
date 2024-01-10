import { Flex } from "@chakra-ui/react";
import { AsideContentProps } from "@shared/ui/aside";

export const AsideContent = (props: AsideContentProps) => {
    return (
        <Flex
            p="8px"
            direction="column"
            {...props}
        />
    )
}
