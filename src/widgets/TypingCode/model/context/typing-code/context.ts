import {createContext, RefObject, useContext} from "react";
import {ITypingCodeContext} from "@widgets/TypingCode/model/context/typing-code/types.ts";

export const TypingCodeContext = createContext<ITypingCodeContext>({
    currentRowIndex: 0,
    handleNewText: () => {
    },
    typingValue: '',
    handleChangePrintingInput: () => {
    },
    isEnded: false,
    handleKeyDown: () => {
    },
    containerRef: {} as RefObject<HTMLDivElement>,
    resultRef: {} as RefObject<HTMLDivElement>,
    rows: [],
    randomText: null,
    scrollTo: () => {
    }
})

export const useTypingCode = () => useContext(TypingCodeContext)