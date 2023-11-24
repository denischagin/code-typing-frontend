export interface SymbolProps {
    symbolId: string
    symbol: string
    status: TSymbolStatus
    isPrinting?: boolean
}

export type TSymbolStatus = 'error' | 'default' | 'override' | 'extra'