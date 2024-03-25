import {createContext, useContext} from "react";

import {CodeErrorsContextState} from "@entities/code";

export const CodeErrorsContext = createContext<CodeErrorsContextState>({} as CodeErrorsContextState)

export const useCodeErrors = () => useContext(CodeErrorsContext)