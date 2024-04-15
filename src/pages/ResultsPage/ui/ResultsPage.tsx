import { ChangeEventHandler, useEffect, useState } from "react"

import { Box, Container, Flex, Select, Text } from "@chakra-ui/react"

import { useSearchParams } from "react-router-dom"

import {
    getResultFromSearch,
    mapResultToSearch,
    ResultParams,
    useGetSavedResults
} from "@entities/results"
import { fieldsSortBy } from "@entities/results/constants"
import { getPaginationItems } from "@shared/libs"
import { CodeLoading, CodeLoadingProgress, CodeLoadingTitle } from "@shared/ui/loading"
import { Pagination, PaginationDown, PaginationItem, PaginationUp } from "@shared/ui/pagination"
import { ResultsList } from "@widgets/ResultsList"

const ResultsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [totalPages, setTotalPages] = useState<number>(0)

    const resultParams = getResultFromSearch(searchParams)

    const {
        data: resultsResponse,
        isFetching,
        isError,
        isSuccess
    } = useGetSavedResults(resultParams)

    useEffect(() => {
        if (!resultsResponse) return
        setTotalPages(resultsResponse.totalPages)
    }, [resultsResponse])

    useEffect(() => {
        handleSetSearchParams(resultParams)
    }, [])

    const handleSetSearchParams = (resultParams: Record<keyof ResultParams, unknown>) => {
        setSearchParams(mapResultToSearch(resultParams))
    }

    const handleChangePage = (page: number) => {
        handleSetSearchParams({ ...resultParams, page })
    }

    const handleChangeResults =
        (field: keyof ResultParams): ChangeEventHandler<HTMLSelectElement> =>
        e => {
            const value = e.target.value
            handleSetSearchParams({ ...resultParams, [field]: value })
        }

    const paginationItems = getPaginationItems(totalPages, resultParams.page)

    return (
        <Container maxW="1000px" py={3} display="flex" flexDir="column">
            <Flex gap={2} align="center" mb={4} justify="center">
                <Text>
                    SELECT * FROM Results{" "}
                    <Text as="span" color="primary.200">
                        ORDER BY
                    </Text>
                </Text>

                <Select
                    w="200px"
                    onChange={handleChangeResults("sortBy")}
                    value={resultParams.sortBy}
                >
                    {fieldsSortBy.map(({ title, value }) => (
                        <option value={value} key={value}>
                            {title}
                        </option>
                    ))}
                </Select>

                <Select
                    w="100px"
                    onChange={handleChangeResults("direction")}
                    value={resultParams.direction}
                >
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
                </Select>
            </Flex>
            <Box flexGrow="1">
                {isFetching && (
                    <CodeLoading>
                        <CodeLoadingTitle title="Loading results..." />
                        <CodeLoadingProgress />
                    </CodeLoading>
                )}
                {isSuccess &&
                    (resultsResponse.content.length !== 0 ? (
                        <ResultsList results={resultsResponse.content} />
                    ) : (
                        <Text fontSize="xl">No results</Text>
                    ))}
                {isError && (
                    <Text fontSize="xl" color="error">
                        Error loading results
                    </Text>
                )}
            </Box>

            <Pagination alignSelf="center" mt={5} flexWrap="wrap">
                <PaginationDown
                    onChangePage={handleChangePage}
                    page={resultParams.page}
                    totalPages={resultsResponse?.totalPages ?? 0}
                />

                <Flex gap={1} minW="400px" justify="center" flexGrow={1}>
                    {paginationItems.map(item => (
                        <PaginationItem
                            key={item}
                            isActive={resultParams.page === item}
                            onClick={() => handleChangePage(item)}
                        >
                            {item}
                        </PaginationItem>
                    ))}
                    {isFetching &&
                        Array.from({ length: 5 }).map(() => <PaginationItem> </PaginationItem>)}
                </Flex>

                <PaginationUp
                    onChangePage={handleChangePage}
                    page={resultParams.page}
                    totalPages={resultsResponse?.totalPages ?? 0}
                />
            </Pagination>
        </Container>
    )
}

export default ResultsPage
