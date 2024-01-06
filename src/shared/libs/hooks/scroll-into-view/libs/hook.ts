import {Ref, useRef} from "react";

export const useScrollIntoView = <ScrollElement extends HTMLElement, ScrollElementParent extends HTMLElement = ScrollElement>(
    indentTop: number = 0,
    indentLeft: number = 0
): [scrollRef: Ref<ScrollElement>, scrollHandler: () => void, scrollRefParent: Ref<ScrollElementParent>] => {
    const scrollRef = useRef<ScrollElement>(null)
    const scrollRefParent = useRef<ScrollElementParent>(null)

    const scrollIntoView = () => {
        if (!scrollRef.current || !scrollRefParent.current) return

        const parentRect = scrollRefParent.current.getBoundingClientRect()
        const childRect = scrollRef.current.getBoundingClientRect()

        const topOffset = childRect.top - parentRect.top + scrollRefParent.current.scrollTop + indentTop
        const leftOffset = childRect.left - parentRect.left + scrollRefParent.current.scrollLeft + indentLeft

        scrollRefParent.current.scroll({
            top: topOffset,
            left: leftOffset,
            behavior: "smooth"
        })
    }
    return [scrollRef, scrollIntoView, scrollRefParent]
}