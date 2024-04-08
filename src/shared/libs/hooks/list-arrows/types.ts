import { KeyboardEventHandler, RefObject } from "react"

export interface UseListArrowsReturn {
    itemFocusedRef: RefObject<HTMLAnchorElement>
    containerRef: RefObject<HTMLDivElement>
    handleResetFocused: () => void
    handleArrowDown: KeyboardEventHandler
    handleArrowUp: KeyboardEventHandler
    handleEnter: KeyboardEventHandler
    handleScrollToItem: () => void
    itemFocused: number
}
