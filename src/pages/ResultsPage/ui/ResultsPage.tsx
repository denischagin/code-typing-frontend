import {Container, Text} from "@chakra-ui/react";

import {useGetSavedResults} from "@entities/results";
import {CodeLoading, CodeLoadingProgress, CodeLoadingTitle} from "@shared/ui/loading";
import {ResultsList} from "@widgets/ResultsList";

const ResultsPage = () => {
    const {data: resultsList, isPending} = useGetSavedResults()

    if (isPending) {
        return (
            <CodeLoading>
                <CodeLoadingTitle title="Loading results..."/>
                <CodeLoadingProgress/>
            </CodeLoading>
        )
    }

    return (
        <Container maxW="1000px" py={3}>
            {resultsList?.length ? (
                <ResultsList results={resultsList}/>
            ) : (
                <Text fontSize="xl">No results</Text>
            )}
        </Container>
    )
}

export default ResultsPage