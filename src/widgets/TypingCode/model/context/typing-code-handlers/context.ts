import {createContext, RefObject, useContext} from "react";
import {ITypingCodeHandlersContext} from "@widgets/TypingCode/model/context/typing-code-handlers/types.ts";

export const TypingCodeHandlersContext = createContext<ITypingCodeHandlersContext>({
    handleNewText: () => {
    },
    handleChangePrintingInput: () => {
    },
    handleKeyDown: () => {
    },
    containerRef: {} as RefObject<HTMLDivElement>,
    resultRef: {} as RefObject<HTMLDivElement>,
    scrollTo: () => {
    },
    isEnded: false,
    isNotStarted: true,
    isPrinting: false,
    status: "not-started"
})

export const useTypingCodeHandlers = () => useContext(TypingCodeHandlersContext)