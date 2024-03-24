import {ReactElement, ReactNode, RefObject} from "react";

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
    textRowElement?: ReactNode
}


export interface UsePrintingRowScrollOptions {
    rowRef: RefObject<HTMLDivElement>,
    text: string,
    typingValue?: string | null,
}
