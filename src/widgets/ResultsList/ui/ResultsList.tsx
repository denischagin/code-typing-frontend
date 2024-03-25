import {Stack, Text} from "@chakra-ui/react";

import {ResultsItem} from "@entities/results";
import {ResultsListProps} from "@widgets/ResultsList";

export const ResultsList = ({results}: ResultsListProps) => {
    return (
        <Stack as="ul" spacing={5}>
            {results.length !== 0
                ? results.map((result, index) => (
                    <ResultsItem key={result.id} resultIndex={index} {...result} />
                )) : (
                    <Text fontSize="xx-large" as="li">
                        No results
                    </Text>
                )}
        </Stack>
    )
}