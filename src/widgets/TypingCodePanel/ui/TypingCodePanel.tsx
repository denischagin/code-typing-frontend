import {Box, Flex, Text, Tooltip} from "@chakra-ui/react";

import {useSearchParams} from "react-router-dom";

import {useCodeErrors} from "@entities/code";
import {RepeatCodeButton} from "@features/repeat-code";
import {TypingCodeTimer} from "@features/typing";
import {searchParamsEnum} from "@shared/constants";

export const TypingCodePanel = () => {
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    const {errorsCount} = useCodeErrors()

    return (
        <Flex justify="space-between" align="center" px="10px" mb="4px">
            <Flex align="center" gap="10px">
                <Text fontSize="large" textDecoration="underline">{languageName ?? "Random"}</Text>

                <RepeatCodeButton/>

                <Box ml={10}>
                    <TypingCodeTimer/>
                </Box>
            </Flex>

            <Flex gap="20px" align="center">
                {errorsCount !== 0 ? (
                    <Tooltip label={`${errorsCount} error(s)`}>
                        <Text color="red.300">{errorsCount}x</Text>
                    </Tooltip>
                ) : (
                    <Tooltip label="No errors">
                        <Text color="green.300" fontSize="x-large">&#x2713;</Text>
                    </Tooltip>
                )}

            </Flex>
        </Flex>
    )
}