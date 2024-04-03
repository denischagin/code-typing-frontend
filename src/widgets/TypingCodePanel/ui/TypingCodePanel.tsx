import { Box, Flex, Text, Tooltip } from "@chakra-ui/react"

import { useSearchParams } from "react-router-dom"

import { useCodeErrors } from "@entities/code"
import { NewCodeButton } from "@features/code/new"
import { RepeatCodeButton } from "@features/code/repeat"
import { ButtonScrollToResult } from "@features/scroll-to-result"
import { TypingCodeTimer } from "@features/typing"
import { searchParamsEnum } from "@shared/constants"

export const TypingCodePanel = () => {
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    const { errorsCount } = useCodeErrors()

    return (
        <Flex justify="space-between" align="center" px="10px" mb="4px">
            <Flex align="center" gap="10px">
                <Text fontSize="large" textDecoration="underline" mr={5}>
                    {languageName ?? "Random"}
                </Text>

                <NewCodeButton />
                <RepeatCodeButton />

                <Box ml={10}>
                    <TypingCodeTimer />
                </Box>

                <ButtonScrollToResult ml={10}>Result</ButtonScrollToResult>
            </Flex>

            <Flex gap="20px" align="center">
                {errorsCount !== 0 ? (
                    <Tooltip label={`${errorsCount} error(s)`}>
                        <Text color="red.300">{errorsCount}x</Text>
                    </Tooltip>
                ) : (
                    <Tooltip label="No errors">
                        <Text color="green.300" fontSize="x-large">
                            &#x2713;
                        </Text>
                    </Tooltip>
                )}
            </Flex>
        </Flex>
    )
}
