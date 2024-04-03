import { FC } from "react"

import { Flex } from "@chakra-ui/react"

import { CodeLoadingProps } from "@shared/ui/loading"

export const CodeLoading: FC<CodeLoadingProps> = props => {
    return <Flex w="100%" justify="space-between" {...props} />
}
