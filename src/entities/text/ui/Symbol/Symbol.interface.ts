import {TSymbolStatus} from "@entities/text";

export interface SymbolProps {
    symbolId: string
    symbol: string
    status: TSymbolStatus
    isPrinting?: boolean
}
