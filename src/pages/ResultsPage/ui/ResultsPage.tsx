import { Container } from "@chakra-ui/react"

import { ResultsWithPagination } from "@widgets/ResultsWithPagination"

const ResultsPage = () => {
    return (
        <Container maxW="1000px" py={3} display="flex" flexDir="column">
            <ResultsWithPagination />
        </Container>
    )
}

export default ResultsPage
