import {ReactElement} from "react";
import {TextProps} from "@chakra-ui/react";

export type TPrintingRowStatus = 'default' | 'active' | 'printed'

export interface PrintingRowProps {
    text: string
    index: number
    status?: TPrintingRowStatus
    endIndent?: number
    printingInput?: ReactElement | null
    typingValue?: string | null
    textProps?: TextProps
}