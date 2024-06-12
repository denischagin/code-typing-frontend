import { KeyboardEventHandler, RefObject } from "react"

export interface UseListArrowsReturn<
    TItemElement extends HTMLElement,
    TContainerElement extends HTMLElement
> {
    itemFocusedRef: RefObject<TItemElement>
    containerRef: RefObject<TContainerElement>
    handleResetFocused: () => void
    handleArrowDown: KeyboardEventHandler
    handleArrowUp: KeyboardEventHandler
    handleEnter: KeyboardEventHandler
    handleScrollToItem: () => void
    itemFocused: number
}
