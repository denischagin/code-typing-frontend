import {ChangeEventHandler, KeyboardEvent} from "react";

export interface PrintingInputProps {
    typingValue: string
    isRightRow: boolean
    handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
    onChange: ChangeEventHandler<HTMLInputElement>
    maxLength: number
}