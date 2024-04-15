import { ResultParams } from "@entities/results"
import { searchParamsEnum } from "@shared/constants"

export const mapResultToSearch = (
    resultParams: Record<keyof ResultParams, unknown>
): URLSearchParams => {
    return new URLSearchParams({
        [searchParamsEnum.page]: String(resultParams.page),
        [searchParamsEnum.direction]: String(resultParams.direction),
        [searchParamsEnum.size]: String(resultParams.size),
        [searchParamsEnum.sortBy]: String(resultParams.sortBy)
    })
}
