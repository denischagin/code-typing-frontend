import {createContext, useContext} from "react";
import {ICurrentRowContext} from "@widgets/TypingCode";

export const CurrentRowContext = createContext<ICurrentRowContext>({} as ICurrentRowContext)

export const useCurrentRow = () => useContext(CurrentRowContext)