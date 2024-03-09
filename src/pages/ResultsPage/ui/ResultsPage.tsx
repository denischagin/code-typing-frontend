import {Container, Text} from "@chakra-ui/react";

import {useGetSavedResults} from "@entities/results";
import {CodeLoading} from "@shared/ui/loading";
import {ResultsList} from "@widgets/ResultsList";

const ResultsPage = () => {
    const {data: resultsList, isPending} = useGetSavedResults()

    if (isPending) {
        return <CodeLoading title="Loading results"/>
    }

    return (
        <Container maxW="1000px">
            {resultsList?.length ? <ResultsList results={resultsList}/> : <Text fontSize="xl">No results</Text>}
        </Container>
    )
}

export default ResultsPage