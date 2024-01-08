import {ReactElement, ReactNode} from "react";
import {TextProps} from "@chakra-ui/react";

export type TPrintingRowStatus = 'default' | 'active' | 'printed'

export interface PrintingRowProps {
    index: number
    text: string
    status?: TPrintingRowStatus
    endIndent?: number
    printingInput?: ReactElement | null
    typingValue?: string | null
    textProps?: TextProps
    textRowElement?: ReactNode
}