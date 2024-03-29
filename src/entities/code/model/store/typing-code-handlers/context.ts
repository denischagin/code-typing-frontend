import {createContext, RefObject, useContext} from "react";

import {TypingCodeHandlersContextState} from "@entities/code";

export const TypingCodeHandlersContext = createContext<TypingCodeHandlersContextState>({
    handleNewText: () => null,
    handleChangePrintingInput: () => null,
    handleKeyDown: () => null,
    scrollTo: () => null,
    containerRef: {} as RefObject<HTMLDivElement>,
    resultRef: {} as RefObject<HTMLDivElement>,
    isEnded: false,
    isNotStarted: true,
    isPrinting: false,
    status: "not-started",
    endTyping: () => null,
    startTyping: () => null,
    resetTyping: () => null,
    scrollToResult: () => null,
    inputRef: undefined,
})

export const useTypingCodeHandlers = () => useContext(TypingCodeHandlersContext)