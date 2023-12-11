import {ResultsItem} from "@entities/results";
import {ResultsListProps} from "@widgets/ResultsList";
import {Stack, Text} from "@chakra-ui/react";

export const ResultsList = ({results}: ResultsListProps) => {
    return (
        <Stack spacing={5}>
            {results.length !== 0
                ? results.map((result, index) => (
                    <ResultsItem key={result.resultId} resultIndex={index} {...result} />
                )) : (
                    <Text fontSize="large">
                        Пока еще нет результатов
                    </Text>
                )}
        </Stack>
    )
}