import {ChangeEventHandler, KeyboardEventHandler, RefObject} from "react";

export interface ITypingCodeContext {
    currentRowIndex: number,
    typingValue: string,
    isEnded: boolean,
    handleKeyDown: KeyboardEventHandler<HTMLInputElement>,
    handleChangePrintingInput: ChangeEventHandler<HTMLInputElement>,
    containerRef: RefObject<HTMLDivElement>,
    resultRef: RefObject<HTMLDivElement>,
    handleNewText: () => void
    rows?: string[]
    randomText?: null | string
    scrollTo: (options: ScrollToOptions) => void
}