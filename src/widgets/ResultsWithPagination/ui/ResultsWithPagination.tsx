import { ChangeEventHandler, useEffect } from "react"

import { Box, Text } from "@chakra-ui/react"

import { useSearchParams } from "react-router-dom"

import {
    getResultFromSearch,
    mapResultToSearch,
    ResultListSkeleton,
    ResultParams,
    ResultsList,
    useGetSavedResultsByPage
} from "@entities/results"
import { ResultsSortPanel } from "@features/result"
import { getPaginationItems } from "@shared/libs"
import { Pagination, PaginationDown, PaginationItems, PaginationUp } from "@shared/ui/pagination"

export const ResultsWithPagination = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const resultParams = getResultFromSearch(searchParams)

    const {
        data: resultsResponse,
        totalPages,
        isFetching,
        isError
    } = useGetSavedResultsByPage(resultParams)

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
        <>
            <ResultsSortPanel onChangeResults={handleChangeResults} resultParams={resultParams} />

            <Box as="section" flexGrow="1">
                {isFetching && <ResultListSkeleton />}

                {resultsResponse?.content.length !== 0 ? (
                    <ResultsList results={resultsResponse?.content} />
                ) : (
                    <Text fontSize="xl">No results</Text>
                )}

                {isError && (
                    <Text fontSize="xl" color="error">
                        Error loading results
                    </Text>
                )}
            </Box>

            <Pagination
                as="section"
                mt={5}
                onChangePage={handleChangePage}
                page={resultParams.page}
                totalPages={resultsResponse?.totalPages ?? 0}
                alignSelf="center"
            >
                <PaginationDown />
                <PaginationItems items={paginationItems} />
                <PaginationUp />
            </Pagination>
        </>
    )
}
