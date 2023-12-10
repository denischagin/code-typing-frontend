import {ResultsList} from "@widgets/ResultsList";
import {useUnit} from "effector-react";
import {$resultsStore} from "@entities/results";
import {Container} from "@chakra-ui/react";

const ResultsPage = () => {
    const resultsList = useUnit($resultsStore)

    return (
            <Container maxW="1000px">
                <ResultsList results={resultsList ?? []}/>
            </Container>
    )
}

export default ResultsPage