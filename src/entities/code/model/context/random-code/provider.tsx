import {ReactNode, useMemo} from "react";
import {RandomCodeContext, transformCodeToRows, useRandomCodeWithSearchParam} from "@entities/code";

export const RandomCodeProvider = ({children}: { children: ReactNode }) => {
    const [randomText, newRandomText] = useRandomCodeWithSearchParam()

    const rows = useMemo(() =>
            transformCodeToRows(randomText?.trim() ?? null),
        [randomText])

    return (
        <RandomCodeContext.Provider value={{
            randomText,
            newRandomText,
            rows
        }}>
            {children}
        </RandomCodeContext.Provider>
    )
}