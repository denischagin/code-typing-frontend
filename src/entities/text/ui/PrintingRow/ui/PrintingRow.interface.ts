import {ReactElement} from "react";

export interface PrintingRowProps {
    isActive: boolean
    isPrinted: boolean
    index: number
    text: string
    endIndent: number
    printingInput: ReactElement | null
    typingValue: string | null
}