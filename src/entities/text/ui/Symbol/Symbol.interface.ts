import {TSymbolStatus} from "@entities/text";

export interface SymbolProps {
    symbol: string
    status: TSymbolStatus
    isPrinting?: boolean
}
