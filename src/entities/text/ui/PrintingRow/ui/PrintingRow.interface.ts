import {ReactElement} from "react";

export interface PrintingRowProps {
    isActive: boolean
    isPrinted: boolean
    index: number
    text: string
    printingInput: ReactElement | null
}