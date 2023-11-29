import {TSymbolStatus} from "@entities/text";
import {ICursorPosition} from "@entities/cursor";

export interface SymbolProps {
    symbol: string
    status: TSymbolStatus
    isPrinting?: boolean
    onChangeCursorPosition: (cursorPosition: ICursorPosition) => void
}
