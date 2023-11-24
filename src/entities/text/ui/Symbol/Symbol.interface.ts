export interface SymbolProps {
    symbolId: string
    symbol: string
    status: TSymbolStatus
}

export type TSymbolStatus = 'error' | 'default' | 'printing' | 'override'