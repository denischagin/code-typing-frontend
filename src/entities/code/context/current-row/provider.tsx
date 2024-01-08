import {ReactNode} from "react";
import {CurrentRowContext, useCurrentRowState, useRandomCode} from "@entities/code";

export const CurrentRowProvider = ({children}: { children: ReactNode }) => {
    const {rows} = useRandomCode()

    const currentRowState = useCurrentRowState(rows)

    return (
        <CurrentRowContext.Provider value={currentRowState}>
            {children}
        </CurrentRowContext.Provider>
    )
}