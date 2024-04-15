import { ResultDirectionEnum, ResultParams, ResultsSortBy } from "@entities/results"
import { searchParamsEnum } from "@shared/constants"

export const getResultFromSearch = (searchParams: URLSearchParams): ResultParams => {
    const size = searchParams.get(searchParamsEnum.size)
    const page = searchParams.get(searchParamsEnum.page)

    const resultParams: ResultParams = {
        page: page !== null ? Number(page) : 0,
        direction:
            (searchParams.get(searchParamsEnum.direction) as ResultDirectionEnum) ??
            ResultDirectionEnum.DESC,
        size: size !== null ? Number(size) : 12,
        sortBy: (searchParams.get(searchParamsEnum.sortBy) as ResultsSortBy) ?? "endTime"
    }

    return resultParams
}
