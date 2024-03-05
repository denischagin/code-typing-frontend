import {ResultsList} from "@widgets/ResultsList";
import {useGetSavedResults} from "@entities/results";
import {Container, Progress, Text} from "@chakra-ui/react";

const ResultsPage = () => {
    const {data: resultsList, isPending} = useGetSavedResults()

    if (isPending) {
        return <Progress colorScheme="blue" isIndeterminate/>
    }

    return (
        <Container maxW="1000px">
            {resultsList?.length === 0 && <Text>No results</Text>}
            {!!resultsList?.length && <ResultsList results={resultsList}/>}
        </Container>
    )
}

export default ResultsPage