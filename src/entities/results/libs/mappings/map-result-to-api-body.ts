import {IResultCode, TSaveResultBody} from "@entities/results";

export const mapResultToApiBody = (result: IResultCode): TSaveResultBody => {
    const {
        resultTime,
        endTime,
        startTime,
        symbolsPerSecond,
        accuracy,
        text,
        errorsCount,
        symbolPerMinute
    } = result

    return {
        resultTime,
        endTime: endTime?.toISOString() ?? "",
        startTime: startTime?.toISOString() ?? "",
        symbolsPerSecond,
        accuracy,
        text,
        errorsCount,
        symbolPerMinute
    }
}