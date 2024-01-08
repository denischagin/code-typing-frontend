import {createContext, useContext} from "react";
import {IRandomCodeContext} from "@entities/code";

export const RandomCodeContext = createContext<IRandomCodeContext>({} as IRandomCodeContext)

export const useRandomCode = () => useContext(RandomCodeContext)