import { getResultId, getResultStats, IResult } from "@entities/results"

export interface GetResultWithStatsArgs {
    stopTimeMilliseconds: number
    timeMillisecondsStart: number
    text: string
}

export const getResultWithStats = ({
    timeMillisecondsStart,
    stopTimeMilliseconds,
    text
}: GetResultWithStatsArgs): IResult => {
    const resultId = getResultId({
        timeEndMilliseconds: stopTimeMilliseconds,
        timeStartMilliseconds: timeMillisecondsStart
    })

    const result = {
        resultId,
        text,
        timeEndMilliseconds: stopTimeMilliseconds,
        timeStartMilliseconds: timeMillisecondsStart,
        timeResultMilliseconds: stopTimeMilliseconds - timeMillisecondsStart
    }

    return {
        ...result,
        ...getResultStats(result)
    }
}
