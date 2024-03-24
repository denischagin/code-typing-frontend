import {Flex, Text} from "@chakra-ui/react";

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
            </Flex>

            <Flex gap="20px" align="center">
                {errorsCount !== 0 && (
                    <Text color="red.300">{errorsCount}x</Text>
                )}

                <TypingCodeTimer/>
            </Flex>
        </Flex>
    )
}