export interface GetResultIdArgs {
    timeStartMilliseconds: number
    timeEndMilliseconds: number
}

export const getResultId = ({ timeEndMilliseconds, timeStartMilliseconds }: GetResultIdArgs) =>
    `${timeStartMilliseconds}-${timeEndMilliseconds}`
