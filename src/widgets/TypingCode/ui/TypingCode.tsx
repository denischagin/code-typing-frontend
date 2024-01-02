import {PrintingInput, PrintingRow, useRandomText} from "@entities/text";
import {useRow} from "@widgets/TypingCode";
import {KeyboardEvent, useEffect} from "react";
import {useUnit} from "effector-react";
import {$timerStore, eventStartTimer, eventStopTimer} from "@entities/timer";

export const TypingCode = () => {
    const randomText = useRandomText()
    const rows = randomText.split('\n')

    const {
        nextRow,
        currentRowIndex,
        setTypingValue,
        typingValue,
        setValueWithTab,
    } = useRow(rows)

    const {timer, startTimer, stopTimer} = useUnit({
        timer: $timerStore,
        startTimer: eventStartTimer,
        stopTimer: eventStopTimer,
    })
    useEffect(() => {
        if (currentRowIndex === 0 && timer.timerStatus !== "started" && typingValue.length === 1) {
            startTimer(Date.now())
        }
    }, [currentRowIndex, startTimer, timer.timerStatus, typingValue.length]);

    const handleKeyDown = (row: string, rowIndex: number) => (e: KeyboardEvent) => {
        if (e.key === 'Enter' && row === typingValue.trimEnd()) {
            if (rowIndex === rows.length - 1)
                return stopTimer(Date.now())
            nextRow()
        }
        if (e.key === 'Tab') {
            e.preventDefault()
            setValueWithTab()
        }
    }

    return (
        <div>
            {rows.map((row, rowIndex) => (
                <PrintingRow
                    isActive={rowIndex === currentRowIndex}
                    index={rowIndex}
                    text={row}
                    isPrinted={currentRowIndex > rowIndex}
                    printingInput={(
                        <PrintingInput
                            typingValue={typingValue}
                            isRightRow={row.startsWith(typingValue)}
                            handleKeyDown={handleKeyDown(row, rowIndex)}
                            onChange={(e) => setTypingValue(e.target.value)}
                        />
                    )}
                />
            ))}
        </div>
    )
}