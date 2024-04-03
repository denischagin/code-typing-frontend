import { ReactNode, useMemo } from "react"

import {
    RandomCodeContext,
    transformCodeToRows,
    useRandomCodeWithSearchParam
} from "@entities/code"

export const RandomCodeProvider = ({ children }: { children: ReactNode }) => {
    const [randomText, { newText, isPending, id }] = useRandomCodeWithSearchParam()

    const rows = useMemo(() => transformCodeToRows(randomText?.trim() ?? null), [randomText])

    return (
        <RandomCodeContext.Provider
            value={{
                randomText,
                newRandomText: newText,
                rows,
                randomTextUUID: id,
                isPending
            }}
        >
            {children}
        </RandomCodeContext.Provider>
    )
}
