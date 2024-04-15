import { ResultParams, ResultsSortBy } from "@entities/results"
import { searchParamsEnum } from "@shared/constants"

export const getResultFromSearch = (searchParams: URLSearchParams): ResultParams => {
    const size = searchParams.get(searchParamsEnum.size)
    const page = searchParams.get(searchParamsEnum.page)

    return {
        page: page !== null ? Number(page) : 0,
        direction: searchParams.get(searchParamsEnum.direction) ?? "desc", // TODO add enum for direction
        size: size !== null ? Number(size) : 12,
        sortBy: (searchParams.get(searchParamsEnum.sortBy) as ResultsSortBy) ?? "endTime"
    }
}
