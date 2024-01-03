import {ChangeEventHandler, KeyboardEvent} from "react";

export interface PrintingInputProps {
    typingValue: string
    isRightRow: boolean
    handleKeyDown: (e: KeyboardEvent) => void
    onChange: ChangeEventHandler<HTMLInputElement>
    maxLength: number
}