import { CursorPositionContext, ICursorPosition } from "@entities/cursor"
import { ReactNode, useCallback, useState } from "react"

export const CursorPositionProvider = (props: { children: ReactNode }) => {
    const [cursorPosition, setCursorPosition] =
        useState<ICursorPosition>({ left: 0, top: 0 })

    const handleChangePosition = useCallback(({ left, top}: ICursorPosition) => {
            setCursorPosition({
                top, left
            })
    }, [])

    return (
        <CursorPositionContext.Provider
            value={{ ...cursorPosition, handleChangePosition }}
            {...props}
        />
    )
}