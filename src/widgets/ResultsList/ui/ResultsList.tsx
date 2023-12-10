import {ResultsItem} from "@entities/results";
import {ResultsListProps} from "@widgets/ResultsList";
import {Stack} from "@chakra-ui/react";

export const ResultsList = ({results}: ResultsListProps) => {
    return (
        <Stack spacing={5}>
            {results.map((result, index) => (
                <ResultsItem key={result.resultId} resultIndex={index} {...result} />
            ))}
        </Stack>
    )
}