import {ReactElement, RefObject} from "react";

import {TextProps} from "@chakra-ui/react";

export type PrintingRowStatus = 'default' | 'active' | 'printed'

export interface PrintingRowProps {
    index: number
    text: string
    status?: PrintingRowStatus
    endIndent?: number
    printingInput?: ReactElement | null
    typingValue?: string | null
    textProps?: TextProps
}


export interface UsePrintingRowScrollOptions {
    rowRef: RefObject<HTMLDivElement>,
    text: string,
    typingValue?: string | null,
}
