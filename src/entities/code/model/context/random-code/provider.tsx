import {ReactNode, useMemo} from "react";
import {RandomCodeContext, transformCodeToRows, useRandomCodeWithSearchParam} from "@entities/code";

export const RandomCodeProvider = ({children}: { children: ReactNode }) => {
    const [randomText, newRandomText, randomTextUUID] = useRandomCodeWithSearchParam()

    const rows = useMemo(() =>
            transformCodeToRows(randomText?.trim() ?? null),
        [randomText])

    return (
        <RandomCodeContext.Provider value={{
            randomText,
            newRandomText,
            rows,
            randomTextUUID
        }}>
            {children}
        </RandomCodeContext.Provider>
    )
}