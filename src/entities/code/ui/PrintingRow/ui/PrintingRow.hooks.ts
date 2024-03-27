import {useEffect} from "react";

import {UsePrintingRowScrollOptions} from "@entities/code";

export const usePrintingRowHorizontalScroll = ({rowRef, typingValue, text}: UsePrintingRowScrollOptions) => {
    useEffect(() => {
        const rowElement = rowRef.current
        const rowRect = rowElement?.getBoundingClientRect()

        if (typingValue === null || typingValue === undefined || !rowRect || !rowElement) return

        const widthTypingValue = rowElement.scrollWidth / text.length * typingValue.length

        const leftIndent = 50
        const rightIndent = 50

        requestAnimationFrame(() => {
            if (widthTypingValue < rowElement.scrollLeft + leftIndent) {
                rowElement.scroll({
                    left: widthTypingValue - rowRect.width / 2,
                    behavior: "smooth",
                })
            } else if (widthTypingValue + rightIndent > rowRect.width + rowElement.scrollLeft) {
                rowElement.scroll({
                    left: widthTypingValue - rowRect.width / 4,
                    behavior: "smooth",
                })
            }
        })
    }, [text.length, typingValue]);
}