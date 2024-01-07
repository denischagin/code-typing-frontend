import {Button, Flex, Text} from "@chakra-ui/react";
import {Timer} from "@widgets/Timer";
import {useSearchParams} from "react-router-dom";
import {searchParamsEnum} from "@shared/constants";
import {useTypingCode} from "@widgets/TypingCode";

export const TypingCodePanel = () => {
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)
    const {handleNewText} = useTypingCode()

    return (
        <Flex justify="space-between" align="center" px="10px" mb="4px">
            <Flex align="center" gap="10px">
                <Text fontSize="large" textDecoration="underline">{languageName}</Text>
                <Button size="sm" onClick={handleNewText}>
                    Repeat
                </Button>
            </Flex>

            <Timer/>
        </Flex>
    )
}