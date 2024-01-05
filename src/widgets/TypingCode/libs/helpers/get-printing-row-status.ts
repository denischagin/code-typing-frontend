import {TPrintingRowStatus} from "@entities/text/ui/PrintingRow/ui/PrintingRow.interface.ts";

export const getPrintingRowStatus = (rowIndex: number, currentRowIndex: number): TPrintingRowStatus => {
    if (rowIndex === currentRowIndex) return "active"
    if (currentRowIndex > rowIndex) return 'printed'
    return 'default'
}
