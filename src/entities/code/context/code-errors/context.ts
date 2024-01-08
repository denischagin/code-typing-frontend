import {createContext, useContext} from "react";
import {ICodeErrorsContext} from "@entities/code";

export const CodeErrorsContext = createContext<ICodeErrorsContext>({} as ICodeErrorsContext)

export const useCodeErrors = () => useContext(CodeErrorsContext)