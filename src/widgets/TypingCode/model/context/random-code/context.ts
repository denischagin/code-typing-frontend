import {createContext, useContext} from "react";
import {IRandomCodeContext} from "@widgets/TypingCode";

export const RandomCodeContext = createContext<IRandomCodeContext>({} as IRandomCodeContext)

export const useRandomCode = () => useContext(RandomCodeContext)