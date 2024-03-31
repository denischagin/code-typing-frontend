import {Text} from "@chakra-ui/react";

import {CodeLoadingTitleProps} from "@shared/ui/loading";

export const CodeLoadingTitle = (props: CodeLoadingTitleProps) => {
    const {title = "Loading...", ...textProps} = props

    return (
        <Text fontSize="2xl" {...textProps}>
            {`>>`} {title}
        </Text>
    )
}