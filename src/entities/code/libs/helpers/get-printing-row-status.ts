import { PrintingRowStatus } from "@entities/code"

export const getPrintingRowStatus = (
    rowIndex: number,
    currentRowIndex: number
): PrintingRowStatus => {
    if (rowIndex === currentRowIndex) return "active"
    if (currentRowIndex > rowIndex) return "printed"
    return "default"
}
