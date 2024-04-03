import { createContext, useContext } from "react"

import { RandomCodeState } from "@entities/code"

export const RandomCodeContext = createContext<RandomCodeState>({} as RandomCodeState)

export const useRandomCode = () => useContext(RandomCodeContext)
