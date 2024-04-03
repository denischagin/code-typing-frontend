export const roundToFixed = (num: number, fixed: number): number => {
    const mult = Math.pow(10, fixed)
    return Math.round(num * mult) / mult
}
