import {createContext, RefObject, useContext} from "react";
import {ITypingCodeHandlersContext} from "@entities/code";

export const TypingCodeHandlersContext = createContext<ITypingCodeHandlersContext>({
    handleNewText: () => null,
    handleChangePrintingInput: () => null,
    handleKeyDown: () => null,
    scrollTo: () => null,
    containerRef: {} as RefObject<HTMLDivElement>,
    resultRef: {} as RefObject<HTMLDivElement>,
    isEnded: false,
    isNotStarted: true,
    isPrinting: false,
    status: "not-started"
})

export const useTypingCodeHandlers = () => useContext(TypingCodeHandlersContext)