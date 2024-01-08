import {transformCodeToRows, useRandomText} from "@entities/text";
import {ReactNode, useMemo} from "react";
import {RandomCodeContext} from "@widgets/TypingCode";

export const RandomCodeProvider = ({children}: { children: ReactNode }) => {
    const [randomText, newRandomText] = useRandomText()

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