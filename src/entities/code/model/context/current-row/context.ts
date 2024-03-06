import {createContext, useContext} from "react";

import {ICurrentRowContext} from "@entities/code";

export const CurrentRowContext = createContext<ICurrentRowContext>({} as ICurrentRowContext)

export const useCurrentRow = () => useContext(CurrentRowContext)