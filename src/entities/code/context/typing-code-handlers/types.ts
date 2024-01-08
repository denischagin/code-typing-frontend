import {ChangeEventHandler, KeyboardEventHandler, RefObject} from "react";
import {UseTypingActionState} from "@entities/code";

export interface ITypingCodeHandlersContext extends UseTypingActionState {
    handleKeyDown: KeyboardEventHandler<HTMLInputElement>,
    handleChangePrintingInput: ChangeEventHandler<HTMLInputElement>,
    containerRef: RefObject<HTMLDivElement>,
    resultRef: RefObject<HTMLDivElement>,
    handleNewText: () => void
    scrollTo: (options: ScrollToOptions, callback?: () => void) => void
}