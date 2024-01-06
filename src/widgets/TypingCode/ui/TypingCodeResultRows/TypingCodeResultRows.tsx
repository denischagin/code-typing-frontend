import {forwardRef} from "react";
import {PrintingRow} from "@entities/text";
import {TypingCodeResultRowsProps} from "@widgets/TypingCode";

export const TypingCodeResultRows = forwardRef<HTMLDivElement, TypingCodeResultRowsProps>((props, scrollRef) => {
    const {startIndex} = props
    const startRows = 10
    const endRows = 17
    return (
        <>
            {Array.from({length: startRows}).map((_, index) => (
                <PrintingRow key={index} text="  " index={startIndex + index}/>
            ))}
            <div ref={scrollRef}/>
            <PrintingRow
                text="wpm: 100"
                index={startIndex + startRows + 1}
            />
            <PrintingRow
                text="accuracy: 100%"
                index={startIndex + startRows + 2}
            />
            <PrintingRow
                text="time: 1.50.50"
                index={startIndex + startRows + 3}
            />
            {Array.from({length: endRows}).map((_, index) => (
                <PrintingRow key={index} text="  " index={startIndex + index + startRows + 3}/>
            ))}
        </>
    )
})