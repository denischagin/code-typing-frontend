import {ChangeEventHandler, KeyboardEventHandler, RefObject} from "react";
import {UseTypingActionState} from "@entities/text";

export interface ITypingCodeHandlersContext extends UseTypingActionState{
    handleKeyDown: KeyboardEventHandler<HTMLInputElement>,
    handleChangePrintingInput: ChangeEventHandler<HTMLInputElement>,
    containerRef: RefObject<HTMLDivElement>,
    resultRef: RefObject<HTMLDivElement>,
    handleNewText: () => void
    scrollTo: (options: ScrollToOptions) => void
}