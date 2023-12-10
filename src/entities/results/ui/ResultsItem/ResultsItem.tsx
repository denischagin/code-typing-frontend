import {ResultsItemProps} from "@entities/results";
import {convertMillisecondsToTime} from "@shared/libs";
import {Flex, Text} from "@chakra-ui/react";

export const ResultsItem = ({
                                timeResultMilliseconds,
                                resultIndex
                            }: ResultsItemProps) => {
    return (
        <Flex gap="5px" align="center">
            <Text fontSize="large" as="strong">
                {resultIndex + 1}.
            </Text>

            <Text fontSize="x-large" flexGrow={1}>
                {convertMillisecondsToTime(timeResultMilliseconds)}
            </Text>
        </Flex>
    )
}