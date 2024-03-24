import {useEffect} from "react";

import {UsePrintingRowScrollOptions} from "@entities/code";

export const usePrintingRowHorizontalScroll = ({rowRef, typingValue, text}: UsePrintingRowScrollOptions) => {
    useEffect(() => {
        const rowElement = rowRef.current
        const rowRect = rowElement?.getBoundingClientRect()

        if (typingValue === null || typingValue === undefined || !rowRect || !rowElement) return

        const widthTypingValue = rowElement.scrollWidth / text.length * typingValue.length

        requestAnimationFrame(() => {
            if (widthTypingValue < rowElement.scrollLeft + 100) {
                rowElement.scroll({
                    left: widthTypingValue - rowRect.width / 2,
                    behavior: "smooth",
                })
            } else if (widthTypingValue + 200 > rowRect.width + rowElement.scrollLeft) {
                rowElement.scroll({
                    left: widthTypingValue - rowRect.width / 4,
                    behavior: "smooth",
                })
            }
        })
    }, [text.length, typingValue]);
}