import {IResultCode, SaveResultBody} from "@entities/results";
import {roundToFixed} from "@shared/libs";


export const mapResultToApiBody = (result: IResultCode & { codeExampleUUID?: string }): SaveResultBody => {
    const {
        endTime,
        startTime,
        symbolsPerSecond,
        text,
        errorsCount,
        symbolsPerMinute,
        codeExampleUUID
    } = result

    const errorPercent = errorsCount && text ? errorsCount / text.length : 0

    const accuracy = (1 - (errorPercent > 1 ? 1 : errorPercent)) * 100

    return {
        endTime: endTime?.toISOString() ?? "",
        startTime: startTime?.toISOString() ?? "",
        symbolsPerSecond,
        accuracy: roundToFixed(accuracy, 2),
        text,
        errorsCount,
        symbolsPerMinute,
        codeExampleUUID,
    }
}