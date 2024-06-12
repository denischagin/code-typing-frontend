import { KeyboardEventHandler, useEffect, useRef, useState } from "react"

import { UseListArrowsReturn } from "@shared/libs/hooks/list-arrows"

export const useListArrows = <
    TItemElement extends HTMLElement,
    TContainerElement extends HTMLElement
>(
    itemsLength: number
): UseListArrowsReturn<TItemElement, TContainerElement> => {
    const itemFocusedRef = useRef<TItemElement>(null)
    const containerRef = useRef<TContainerElement>(null)

    const [itemFocused, setItemFocused] = useState(-1)

    const handleResetFocused = () => {
        setItemFocused(-1)
    }

    const handleArrowDown: KeyboardEventHandler = e => {
        e.preventDefault()
        setItemFocused(prev => (prev === itemsLength - 1 ? prev : prev + 1))
    }

    const handleArrowUp: KeyboardEventHandler = e => {
        e.preventDefault()
        setItemFocused(prev => (prev <= 0 ? -1 : prev - 1))
    }

    const handleEnter: KeyboardEventHandler = e => {
        e.preventDefault()
        itemFocusedRef.current?.click()
    }

    const handleScrollToItem = () => {
        containerRef.current?.scrollTo({
            top: (itemFocusedRef.current?.offsetTop ?? 0) - containerRef.current?.offsetTop,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        handleScrollToItem()
    }, [itemFocused])

    return {
        handleEnter,
        itemFocusedRef,
        containerRef,
        handleResetFocused,
        handleArrowDown,
        handleArrowUp,
        handleScrollToItem,
        itemFocused
    }
}
