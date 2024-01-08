import {TPrintingRowStatus} from "@entities/code";

export const getPrintingRowStatus = (rowIndex: number, currentRowIndex: number): TPrintingRowStatus => {
    if (rowIndex === currentRowIndex) return "active"
    if (currentRowIndex > rowIndex) return 'printed'
    return 'default'
}
