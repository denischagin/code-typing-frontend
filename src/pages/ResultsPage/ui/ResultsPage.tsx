import { Container, Flex, Select, Text } from "@chakra-ui/react"

import { useGetSavedResults } from "@entities/results"
import { CodeLoading, CodeLoadingProgress, CodeLoadingTitle } from "@shared/ui/loading"
import { Pagination, PaginationDown, PaginationItem, PaginationUp } from "@shared/ui/pagination"
import { ResultsList } from "@widgets/ResultsList"

const ResultsPage = () => {
    const { data: resultsList, isPending } = useGetSavedResults()

    if (isPending) {
        return (
            <CodeLoading>
                <CodeLoadingTitle title="Loading results..." />
                <CodeLoadingProgress />
            </CodeLoading>
        )
    }

    return (
        <Container maxW="1000px" py={3} display="flex" flexDir="column">
            <Flex gap={2} align="center" mb={4} justify="center">
                <Text>
                    SELECT * FROM Results{" "}
                    <Text as="span" color="primary.200">
                        ORDER BY
                    </Text>
                </Text>
                <Select w="100px">
                    <option value="">spm</option>
                </Select>
                <Select w="100px">
                    <option value="">ASC</option>
                </Select>
            </Flex>
            {resultsList?.length ? (
                <ResultsList results={resultsList} />
            ) : (
                <Text fontSize="xl">No results</Text>
            )}

            <Pagination alignSelf="center" mt={5}>
                <PaginationDown />

                <Flex gap={1}>
                    <PaginationItem>0</PaginationItem>
                    <PaginationItem>1</PaginationItem>
                    <PaginationItem>2</PaginationItem>
                </Flex>

                <PaginationUp />
            </Pagination>
        </Container>
    )
}

export default ResultsPage
