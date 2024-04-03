export const convertMillisecondsAndDateToTime = (dateToConvert: number | Date): string => {
    const date = dateToConvert instanceof Date ? dateToConvert : new Date(dateToConvert)

    const minutes = date.getMinutes().toString().padStart(2, "0")
    const seconds = date.getSeconds().toString().padStart(2, "0")
    const millisecondsEnd = date.getMilliseconds().toString().padStart(3, "0")

    return [minutes, seconds, millisecondsEnd].join(":")
}
